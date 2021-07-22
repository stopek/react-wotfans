import { Hidden } from "@material-ui/core";
import { menuItems } from "app/settings";
import Error from "components/core/Error";
import FullPreloader from "components/core/FullPreloader";
import Footer from "components/Footer";
import MainMenu from "components/ui/menu/MainMenu";
import MaterialMenu from "components/ui/menu/MaterialMenu";
import LanguagesBox from "components/wot/LanguagesBox";
import LoggedUserMenu from "components/wot/navigation/LoggedUserMenu";
import Base from "overlays/Base";
import MinimalOverlay from "overlays/Minimal";
import React from "react";
import { useSelector } from "react-redux";
import { selectCrash, selectError, selectNotFound } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK, COLOR_DARK_2, COLOR_TEXT, RADIUS } from "styles/colors";

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

const DialMenuContent = styled.div`
  position: absolute;
  left: 8px;
  top: 10px;
  z-index: 100;
  white-space: nowrap;
`;

const TopBar = styled.div`
  position: absolute;
  right: 15px;
  top: 0;
  z-index: 1000;
  display: flex;
  line-height: 1;
  gap: 15px;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  left: 0;
  background: ${COLOR_DARK_2};
  padding: 5px;
`;

const MainMenuContent = styled.div`
  background: ${COLOR_DARK_2};
  border-radius: ${RADIUS};
  padding-right: 200px;
`;

const CurrentContent = styled.div``;

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
        <Content full={full} {...props}>
          <Hidden mdUp>
            <LoggedUserMenu mobile />
            <DialMenuContent>
              <MaterialMenu actions={menuItems} />
            </DialMenuContent>
          </Hidden>


          <Hidden smDown>
            <TopBar>
              <MainMenuContent>
                <MainMenu items={menuItems} />
              </MainMenuContent>
              <LoggedUserMenu />
            </TopBar>
          </Hidden>

          <Container>
            <FullPreloader />

            {isError && (
              <Error message={`loading.error`} />
            )}

            {isNotFound && (
              <Error message={`loading.not.found`} />
            )}

            <CurrentContent>
              {children}
            </CurrentContent>
            <Footer />
          </Container>

          <LanguagesBox />
        </Content>
      )}
    </>
  );
};
