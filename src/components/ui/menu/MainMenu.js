import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import { COLOR_THEME } from "styles/colors";
import ThemeProvider from "styles/themes/ThemeProvider";

const StylesTab = withStyles((theme) => ({
  root: {
    padding: 6,
    minHeight: 'auto',
    minWidth: 'auto',
    marginRight: 10
  },
  wrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    lineHeight: 1,
    '& .MuiSvgIcon-root, & svg': {
      marginBottom: '0 !important',
      fill: COLOR_THEME,
      width: 20,
      height: 20
    }
  }
}))(Tab);

export default function MainMenu({ theme = 'default_theme', items = [] }) {
  const history = useHistory();

  const handleClickItem = (event, href, route) => {
    event.preventDefault();
    !!route ? history.push(route) : window.open(href, '_blank');
  }

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        id={`main-menu`}
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        {items.map((item) => (
          <StylesTab
            key={`menu-${item.id}`}
            icon={item.icon}
            label={<FormattedMessage id={item.translation} />}
            onClick={(event) => handleClickItem(event, item.href, item.route)}
          />
        ))}
      </Tabs>
    </ThemeProvider>
  );
}
