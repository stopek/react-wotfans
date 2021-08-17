import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { MenuItemInterface } from "interfaces/MenuItemInterface";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface LargeNavigationType {
  theme?: themesTypes,
  items: MenuItemInterface[]
}

const LargeNavigation: React.FC<LargeNavigationType> = (
  {
    theme = Themes.DefaultTheme,
    items = []
  }
) => {
  const history = useHistory();

  const handleClickItem = (event: React.SyntheticEvent<any>, href?: string, route?: string) => {
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation showLabels>
        {items.map((item) => (
          <BottomNavigationAction
            key={`large-menu-${item.i}`}
            label={<FormattedMessage id={item.translation} />}
            onClick={(event) => handleClickItem(event, item.href, item.route)}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default LargeNavigation;
