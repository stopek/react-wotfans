import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ButtonInput from "components/ui/input/ButtonInput";
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import ThemeProvider from "styles/themes/ThemeProvider";


const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MaterialMenu({ theme = 'default_theme', onChange, actions = [], ...props }) {
  const history = useHistory();

  const handleClickItem = (event, href, route) => {
    handleCloseMenu();
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

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
        {actions.map((action) => (
          <StyledMenuItem
            key={`menu-${action.translation}`}
            as={`a`}
            onClick={(event) => handleClickItem(event, action?.href, action?.route)}
            href={!!action?.route ? action?.route : action?.href}
            target={`_blank`}
          >
            <ListItemIcon>
              {action.icon}
            </ListItemIcon>
            <ListItemText primary={<FormattedMessage id={action.translation} />} />
          </StyledMenuItem>
        ))}
      </Menu>
    </ThemeProvider>
  );
};
