import Tabs from '@material-ui/core/Tabs';
import TabItem from "components/ui/tabs/TabItem";
import React from 'react';
import { useHistory, withRouter } from "react-router-dom";
import ThemeProvider from "styles/themes/ThemeProvider";

function TabsList({ tabs, onChange, value, theme = 'default_theme', variant = 'primary' }) {
  const history = useHistory();

  const handleOnChange = (route) => {
    return history.push(route);
  }

  const tabsList = tabs.map(({ route, translation }, key) => {
    return (
      <TabItem key={key} translation={translation} onClick={() => handleOnChange(route)} value={key} />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        indicatorColor={variant}
        textColor={variant}
        scrollButtons="on"
        variant="scrollable"
        value={value}
        onChange={(_, value) => onChange(value)}
      >
        {tabsList}
      </Tabs>
    </ThemeProvider>
  );
}

export default withRouter(TabsList)
