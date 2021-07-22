import UserStatisticsChar from "components/wot/char/UserStatisticsChar";
import Tabs from "components/wot/Tabs";
import hexToRgbA from "helpers/hexToRgbA";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK_2, RADIUS } from "styles/colors";

const CharContainer = styled.div`
  height: 430px;
  color: white;
  margin-bottom: 25px;
  background: ${hexToRgbA(COLOR_DARK_2, 1)};
  position: relative;
  border-radius: ${RADIUS};
`;

export default function LoggedUserTabsChart() {
  const user = useSelector(selectUser);

  const data = {
    playerStatsHistories: user?.response?.player?.playerStatsHistories ?? []
  }

  const statistics_tab = [
    {
      translation: 'wn8',
      component: (
        <UserStatisticsChar
          raw={data.playerStatsHistories}
          data={{ id: "WN8", key: 'wn8', data: [] }}
        />
      )
    },
    {
      translation: 'wn7',
      component: (
        <UserStatisticsChar
          raw={data.playerStatsHistories}
          data={{ id: "WN7", key: 'wn7', data: [] }}
        />
      )
    },
    {
      translation: 'efficiency',
      component: (
        <UserStatisticsChar
          raw={data.playerStatsHistories}
          data={{ id: "efficiency", key: 'efficiency', data: [] }}
        />
      )
    },
    {
      translation: 'battles',
      component: (
        <UserStatisticsChar
          raw={data.playerStatsHistories}
          data={{ id: "battles", key: 'battles', data: [] }}
        />
      )
    },
    {
      translation: 'win.ratio',
      component: (
        <UserStatisticsChar
          raw={data.playerStatsHistories}
          data={{ id: "win_ratio", key: 'win_ratio', data: [] }}
        />
      )
    },
    {
      translation: 'damage.ratio',
      component: (
        <UserStatisticsChar
          raw={data.playerStatsHistories}
          data={{ id: "damage_ratio", key: 'damage_ratio', data: [] }}
        />
      )
    }
  ];

  return (
    <CharContainer>
      <Tabs tabs={statistics_tab} />
    </CharContainer>
  );
}
