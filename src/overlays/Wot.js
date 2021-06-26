import Error from "components/core/Error";
import FullPreloader from "components/core/FullPreloader";
import Footer from "components/Footer";
import LanguagesBox from "components/LanguagesBox";
import LoggedUserMenu from "components/wot/navigation/LoggedUserMenu";
import Menu from "components/wot/navigation/Menu";
import Base from "overlays/Base";
import React from "react";
import { useSelector } from "react-redux";
import { selectError, selectNotFound } from "reducers/wotSlice";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_DARK } from "styles/colors";

const Content = styled(Base)`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 55px 10px 15px 60px;
  overflow-x: hidden;

  @media ${breakpoint.md} {
    padding: 55px 10px 15px 75px;
  }
  ${props => props?.full && `overflow: hidden; background: ${COLOR_DARK};`}
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export default function WotOverlay(
  {
    breadcrumbs = [],
    title = '',
    children,
    ...props
  }
) {
  const isError = useSelector(selectError);
  const isNotFound = useSelector(selectNotFound);

  return (
    <Content {...props}>
      <Menu />

      <LoggedUserMenu />

      <Container>
        <FullPreloader />

        {isError && (
          <Error message={`loading.error`} />
        )}

        {isNotFound && (
          <Error message={`loading.not.found`} />
        )}

        {children}
        <Footer />
      </Container>

      <LanguagesBox />
    </Content>
  );
};
