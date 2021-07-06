import Backdrop from '@material-ui/core/Backdrop';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function DialMenu({ theme = 'default_theme', onChange, actions = [], ...props }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleOpen = (event) => {
    if (event.type === 'click') {
      setOpen(true);
    }
  };

  const handleClose = (event) => {
    if (event?.type === 'click') {
      setOpen(false);
    }
  };

  const handleClick = (event, href, route) => {
    handleClose();
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

  return (
    <ThemeProvider theme={theme}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon icon={<MenuRoundedIcon />} openIcon={<CloseRoundedIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={`down`}
      >
        {actions.map((action) => (
          <SpeedDialAction
            as={`a`}
            href={!!action?.route ? action?.route : action?.href}
            target={`_blank`}
            key={action.translation}
            icon={action.icon}
            tooltipTitle={<FormattedMessage id={action.translation} />}
            tooltipOpen
            onClick={(event) => handleClick(event, action?.href, action?.route)}
            tooltipPlacement={`right`}
          />
        ))}
      </SpeedDial>
    </ThemeProvider>
  );
};
