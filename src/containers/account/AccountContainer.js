import { Box, Grid, Typography } from "@material-ui/core";
import Empty from "components/core/Empty";
import FullPreloader from "components/core/FullPreloader";
import TabsList from "components/ui/tabs/TabsList";
import UserStatisticsChar from "components/wot/char/UserStatisticsChar";
import LoggedUserCard from "components/wot/player/LoggedUserCard";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import hexToRgbA from "helpers/hexToRgbA";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import { selectUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK, RADIUS } from "styles/colors";


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

const CharContainer = styled.div`
  height: 400px;
  color: white;
  margin-bottom: 25px;
  background: ${hexToRgbA(COLOR_DARK, 1)};
  position: relative;
  border-radius: ${RADIUS};
  overflow: hidden;
`;

export default function AccountContainer({ ...props }) {
  const user = useSelector(selectUser);
  const [value, setValue] = useState(0);

  const handleChangeIndex = (value) => {
    setValue(value);
  }

  const data = {
    recently: user?.response?.recently ?? [],
    wrong: user?.response?.wrong ?? [],
    playerStatsHistories: user?.response?.user?.player?.playerStatsHistories ?? []
  }

  return (
    <WotOverlay {...props}>
      {!user?.response && (
        <FullPreloader force={true} />
      )}

      {user?.response && (
        <>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <LoggedUserCard user={user?.response} />
              <MapRotatorPage />
            </Grid>
            <Grid item md={8} xs={12}>
              <CharContainer>
                <UserStatisticsChar
                  raw={data.playerStatsHistories}
                />
              </CharContainer>

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
                  {data.recently.length === 0 && (
                    <Empty translation={`tanks.list.empty`} />
                  )}

                  <TanksListAndFilters
                    tanks_stats={data.recently}
                    grid_props={{ xl: 4 }}
                    weight
                  />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  {data.wrong.length === 0 && (
                    <Empty translation={`tanks.list.empty`} />
                  )}
                </TabPanel>
              </SwipeableViews>
            </Grid>
          </Grid>
        </>
      )}
    </WotOverlay>
  );
}
