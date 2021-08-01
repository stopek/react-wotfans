import Tabs, { TabsProps } from '@material-ui/core/Tabs';
import TabItem from "components/ui/tabs/TabItem";
import { TabInterface } from "interfaces/TabInterface";
import React from 'react';
import { useHistory } from "react-router-dom";
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface TabsListType extends TabsProps {
  tabs: TabInterface[],
  handleChange: (value: number) => void,
  theme?: themesTypes,
}

const TabsList: React.FC<TabsListType> = (
  {
    tabs,
    handleChange,
    theme = Themes.DefaultTheme,
    value,
  }
) => {
  const history = useHistory();

  const handleOnChange = (route: string): any => {
    return history.push(route);
  }

  const tabsList = tabs.map(({ route, translation }, key) => {
    return (
      <TabItem
        key={`tab-item-${key}`}
        translation={translation}
        handleClick={() => typeof route === 'string' ? handleOnChange(route) : {}}
        value={key}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        scrollButtons="on"
        variant="scrollable"
        value={value}
        onChange={(_, value) => handleChange(value)}
      >
        {tabsList}
      </Tabs>
    </ThemeProvider>
  );
}

export default TabsList;
