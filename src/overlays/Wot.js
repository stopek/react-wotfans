import { menuItems } from "app/settings";
import Error from "components/core/Error";
import FullPreloader from "components/core/FullPreloader";
import Footer from "components/Footer";
import DialMenu from "components/ui/menu/DialMenu";
import LanguagesBox from "components/wot/LanguagesBox";
import LoggedUserMenu from "components/wot/navigation/LoggedUserMenu";
import Base from "overlays/Base";
import MinimalOverlay from "overlays/Minimal";
import React from "react";
import { useSelector } from "react-redux";
import { selectCrash, selectError, selectNotFound } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK } from "styles/colors";

const Content = styled(Base)`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 55px 10px 15px 10px;
  overflow-x: hidden;

  ${props => props?.full && `overflow: hidden; background: ${COLOR_DARK};`}
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const DialMenuContent = styled.div`
  position: absolute;
  left: 8px;
  top: 10px;
  z-index: 100;
  white-space: nowrap;
`;

export default function WotOverlay(
  {
    breadcrumbs = [],
    title = '',
    children,
    full = false,
    ...props
  }
) {
  const isError = useSelector(selectError);
  const isNotFound = useSelector(selectNotFound);
  const isCrash = useSelector(selectCrash);

  return (
    <>
      {isCrash && (
        <MinimalOverlay>
          <Error message={`crash.error`} />
          <LanguagesBox />
        </MinimalOverlay>
      )}

      {!isCrash && (
        <Content {...props}>
          <DialMenuContent>
            <DialMenu actions={menuItems} />
          </DialMenuContent>

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
      )}
    </>
  );
};
