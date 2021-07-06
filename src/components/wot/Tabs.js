import { Box, Typography } from "@material-ui/core";
import TabsList from "components/ui/tabs/TabsList";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

const Content = styled.div``;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ overflow: 'hidden', padding: '15px 0' }}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
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
    <Content>
      <TabsList
        tabs={tabs}
        value={value}
        onChange={handleChangeIndex}
      />
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map(({ component }, key) => (
          <TabPanel value={value} index={key}>
            {component}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Content>
  );
}
