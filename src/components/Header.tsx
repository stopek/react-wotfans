import { Hidden } from "@material-ui/core";
import { menuItems } from "app/settings";
import MainMenu from "components/ui/menu/MainMenu";
import MaterialMenu from "components/ui/menu/MaterialMenu";
import LoggedUserMenu from "components/wot/navigation/LoggedUserMenu";
import React from "react";
import styled from "styled-components";
import { COLOR_DARK_2, RADIUS } from "styles/colors";

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

export default function Header() {
  return (
    <>
      <Hidden mdUp>
        <LoggedUserMenu />
        <DialMenuContent>
          <MaterialMenu actions={menuItems} open={false} />
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
    </>
  );
}
