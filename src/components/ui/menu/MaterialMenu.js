import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuItems from "components/ui/menu/MenuItems";
import React from 'react';
import ThemeProvider from "styles/themes/ThemeProvider";

export default function MaterialMenu({ theme = 'default_theme', onChange, actions = [], ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
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
};
