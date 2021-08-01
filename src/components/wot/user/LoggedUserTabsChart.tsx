import { useAppSelector } from "app/hooks";
import UserStatisticsChar from "components/wot/char/UserStatisticsChar";
import Tabs from "components/wot/Tabs";
import hexToRgbA from "helpers/hexToRgbA";
import { sortByKeyMulti } from "helpers/user";
import React from "react";
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
  const user = useAppSelector(selectUser);

  const history = user?.response?.player?.playerStatsHistories;

  const battlesList = sortByKeyMulti(history, 'created_at', false);
  const battlesHistory = battlesList.map((item, key) => {
    return Object.assign({}, item, {
      battles: key > 0 ? item.battles - battlesList[key - 1].battles : 0
    });
  });

  const statistics_tab = [
    {
      translation: 'wn8',
      component: (
        <UserStatisticsChar
          raw={history}
          data={{ id: "WN8", key: 'wn8', data: [] }}
        />
      )
    },
    {
      translation: 'wn7',
      component: (
        <UserStatisticsChar
          raw={history}
          data={{ id: "WN7", key: 'wn7', data: [] }}
        />
      )
    },
    {
      translation: 'efficiency',
      component: (
        <UserStatisticsChar
          raw={history}
          data={{ id: "efficiency", key: 'efficiency', data: [] }}
        />
      )
    },
    {
      translation: 'battles',
      component: (
        <UserStatisticsChar
          raw={battlesHistory}
          data={{ id: "battles", key: 'battles', data: [] }}
        />
      )
    },
    {
      translation: 'win.ratio',
      component: (
        <UserStatisticsChar
          raw={history}
          data={{ id: "win_ratio", key: 'win_ratio', data: [] }}
        />
      )
    },
    {
      translation: 'damage.ratio',
      component: (
        <UserStatisticsChar
          raw={history}
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
