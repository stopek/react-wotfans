import { Box } from "@material-ui/core";
import TabsList from "components/ui/tabs/TabsList";
import { ChildrenInterface } from "interfaces/ChildrenInterface";
import { TabInterface } from "interfaces/TabInterface";
import React, { useState } from "react";

interface TabPanelType extends ChildrenInterface {
  value: number,
  index: number
}

function TabPanel({ children, value, index, ...other }: TabPanelType) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={1} pb={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

type TabsType = {
  tabs: TabInterface[]
}

function Tabs({ tabs }: TabsType) {
  const [value, setValue] = useState<number>(0);

  const handleChangeIndex = (value: number) => {
    setValue(value);
  }

  return (
    <>
      <TabsList
        tabs={tabs}
        value={value}
        handleChange={handleChangeIndex}
      />

      {tabs.map(({ component }, key) => (
        <TabPanel value={value} index={key} key={`tab-${key}`}>
          {component}
        </TabPanel>
      ))}
    </>
  );
}

export default Tabs;
