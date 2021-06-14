import { Paper } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import TabItem from "components/ui/tabs/TabItem";
import React from 'react';
import { useHistory, withRouter } from "react-router-dom";
import ThemeProvider from "styles/themes/ThemeProvider";

function TabsList({ tabs, value, theme = 'default_theme', variant = 'primary' }) {
  const history = useHistory();

  const handleOnChange = (route) => {
    return history.push(route);
  }

  const tabsList = tabs.map(({ route, title, Icon }, key) => {
    return (
      <TabItem key={key} title={title} Icon={Icon} onClick={() => handleOnChange(route)} value={key} />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Tabs
          indicatorColor={variant}
          textColor={variant}
          scrollButtons="on"
          variant="scrollable"
          value={value}
        >
          {tabsList}
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
}

export default withRouter(TabsList)