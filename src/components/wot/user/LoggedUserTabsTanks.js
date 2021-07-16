import { wn8Ranges } from "app/settings";
import Empty from "components/core/Empty";
import Tabs from "components/wot/Tabs";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import { getWNValueByColor, sortByWN8 } from "helpers/user";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";
import { WN8_AVERAGE, WN8_BAD, WN8_BELOW_AVERAGE, WN8_VERY_BAD } from "styles/colors";

export default function LoggedUserTabsTanks() {
  const user = useSelector(selectUser);

  const data = {
    recently: user?.response?.recently ?? [],
    tanksStats: sortByWN8(
      user?.response?.player?.tanksStats,
      true
    )
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
    {
      translation: 'possible.improvement',
      component: (
        <>
          <TanksListAndFilters
            tanks_stats={data.tanksStats}
            grid_props={{ xl: 3 }}
            default_battles={[0, 20]}
            max_battles={100}
            default_wn8={[
              getWNValueByColor(wn8Ranges, WN8_VERY_BAD),
              getWNValueByColor(wn8Ranges, WN8_BAD),
              getWNValueByColor(wn8Ranges, WN8_BELOW_AVERAGE),
              getWNValueByColor(wn8Ranges, WN8_AVERAGE)
            ]}
            weight
          />
        </>
      )
    },
  ];

  return (
    <Tabs tabs={account_tabs} />
  );
}
