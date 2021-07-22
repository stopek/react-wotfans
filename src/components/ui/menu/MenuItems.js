import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";

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

export default function MenuItems({ actions = [], close }) {
  const history = useHistory();

  const handleClickItem = (event, href, route) => {
    close && close();
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

  return actions.map((action) => (
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
  ));
}
