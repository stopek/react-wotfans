import IconButton from "@material-ui/core/IconButton";
import Menu, { MenuProps } from '@material-ui/core/Menu';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuItems from "components/ui/menu/MenuItems";
import { MenuItemInterface } from "interfaces/MenuItemInterface";
import React, { useState } from 'react';
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface MaterialMenuInterface extends MenuProps {
  theme?: themesTypes,
  actions: MenuItemInterface[],
  open: boolean
}

function MaterialMenu({ theme = Themes.DefaultTheme, actions, open = false, ...props }: MaterialMenuInterface) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = (event: React.ChangeEvent<any>) => {
    setAnchorEl(event.target);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={handleClickMenu}>
        {anchorEl ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </IconButton>

      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItems actions={actions} close={handleCloseMenu} />
      </Menu>
    </ThemeProvider>
  );
}

export default MaterialMenu;
