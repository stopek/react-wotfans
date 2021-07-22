import { Box } from "@material-ui/core";
import TabsList from "components/ui/tabs/TabsList";
import React, { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function Tabs({ tabs = [] }) {
  const [value, setValue] = useState(0);

  const handleChangeIndex = (value) => {
    setValue(value);
  }

  return (
    <>
      <TabsList
        tabs={tabs}
        value={value}
        onChange={handleChangeIndex}
      />
      {tabs.map(({ component }, key) => (
        <TabPanel value={value} index={key} key={`tab-${key}`}>
          {component}
        </TabPanel>
      ))}
    </>
  );
}
