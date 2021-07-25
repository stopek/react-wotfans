import Error from "components/core/Error";
import FullPreloader from "components/core/FullPreloader";
import Footer from "components/Footer";
import Header from "components/Header";
import LanguagesBox from "components/wot/LanguagesBox";
import Base from "overlays/Base";
import React from "react";
import { useSelector } from "react-redux";
import { selectCrash, selectError, selectNotFound } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_TEXT } from "styles/colors";

const Content = styled(Base)`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 55px 10px 15px 10px;
  overflow-x: hidden;
  color: ${COLOR_TEXT};
  ${props => props?.full && `overflow: hidden;`}
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function WotOverlay(
  {
    breadcrumbs = [],
    title = '',
    children,
    full,
    ...props
  }
) {
  const isError = useSelector(selectError);
  const isNotFound = useSelector(selectNotFound);
  const isCrash = useSelector(selectCrash);

  return (
    <Content full={full} {...props}>
      <Header />
      <Container>

        {isCrash && (
          <Error message={`crash.error`} />
        )}

        {isError && (
          <Error message={`loading.error`} />
        )}

        {isNotFound && (
          <Error message={`loading.not.found`} surprise={`nothingness`} />
        )}
        <FullPreloader />

        <div>
          {children}
        </div>

        <Footer />
      </Container>

      <LanguagesBox />
    </Content>
  );
};
