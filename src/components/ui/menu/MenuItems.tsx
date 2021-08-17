import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { MenuItemInterface } from "interfaces/MenuItemInterface";
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

type MenuItemsType = {
  actions: MenuItemInterface[],
  close: () => void
}

function MenuItems({ actions = [], close }: MenuItemsType) {
  const history = useHistory();

  const handleClickItem = (event: React.ChangeEvent<any>, href?: string, route?: string) => {
    close && close();
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

  return (
    <>
      {actions.map((action) => (
        <StyledMenuItem
          key={`menu-${action.translation}`}
          onClick={(event) => handleClickItem(event, action?.href, action?.route)}
        >
          <ListItemIcon>
            {action.icon}
          </ListItemIcon>

          <ListItemText primary={<FormattedMessage id={action.translation} />} />
        </StyledMenuItem>
      ))}
    </>
  );
}

export default MenuItems;
