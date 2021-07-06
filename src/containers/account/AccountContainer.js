import { Grid } from "@material-ui/core";
import Empty from "components/core/Empty";
import FullPreloader from "components/core/FullPreloader";
import UserStatisticsChar from "components/wot/char/UserStatisticsChar";
import LoggedUserCard from "components/wot/player/LoggedUserCard";
import Tabs from "components/wot/Tabs";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import hexToRgbA from "helpers/hexToRgbA";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK, RADIUS } from "styles/colors";


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

  const data = {
    recently: user?.response?.recently ?? [],
    wrong: user?.response?.wrong ?? [],
    playerStatsHistories: user?.response?.user?.player?.playerStatsHistories ?? []
  }

  const account_tabs = [
    {
      translation: 'recently.played.tanks',
      component: (
        <>
          {data.recently.length === 0 && (
            <Empty translation={`tanks.list.empty`} />
          )}

          <TanksListAndFilters
            tanks_stats={data.recently}
            grid_props={{ xl: 3 }}
            weight
          />
        </>
      )
    },
    // {
    //   translation: 'possible.improvement',
    //   component: (
    //     <>
    //       {data.wrong.length === 0 && (
    //         <Empty translation={`tanks.list.empty`} />
    //       )}
    //     </>
    //   )
    // },
  ];

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
                <UserStatisticsChar raw={data.playerStatsHistories} />
              </CharContainer>

              <Tabs tabs={account_tabs} />
            </Grid>
          </Grid>
        </>
      )}
    </WotOverlay>
  );
}
