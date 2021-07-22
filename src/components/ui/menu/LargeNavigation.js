import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function LargeNavigation({ theme = 'default_theme', items = [] }) {
  const history = useHistory();
  const handleClickItem = (event, href, route) => {
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation showLabels>
        {items.map((item) => (
          <BottomNavigationAction
            key={`large-menu-${item.id}`}
            label={<FormattedMessage id={item.translation} />}
            onClick={(event) => handleClickItem(event, item.href, item.route)}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </ThemeProvider>
  );
}
