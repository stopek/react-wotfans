import { Box, Grid, Typography } from "@material-ui/core";
import Empty from "components/core/Empty";
import TabsList from "components/ui/tabs/TabsList";
import LoggedUserCard from "components/wot/player/LoggedUserCard";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import { selectUser } from "reducers/wotSlice";

export const account_tabs = [
  { translation: 'recently.played.tanks' },
  { translation: 'possible.improvement' },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ overflow: 'hidden' }}
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

export default function AccountContainer({ ...props }) {
  const user = useSelector(selectUser);
  const [value, setValue] = useState(0);

  const handleChangeIndex = (value) => {
    setValue(value);
  }

  return (
    <WotOverlay {...props}>
      <Grid container spacing={4}>
        <Grid item md={7} xs={12}>
          {user?.response && (
            <>
              <LoggedUserCard user={user?.response} />

              <TabsList
                tabs={account_tabs}
                value={value}
                onChange={handleChangeIndex}
              />
              <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0}>
                  {!user?.response?.recently && (
                    <Empty translation={`tanks.list.empty`} />
                  )}

                  <TanksListAndFilters
                    tanks_stats={user?.response?.recently}
                    grid_props={{ xl: 4 }}
                    weight
                  />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {!user?.response?.wrong && (
                    <Empty translation={`tanks.list.empty`} />
                  )}
                </TabPanel>
              </SwipeableViews>
            </>
          )}
        </Grid>
        <Grid item md={5} xs={12}>
          <MapRotatorPage />
        </Grid>
      </Grid>
    </WotOverlay>
  );
}
