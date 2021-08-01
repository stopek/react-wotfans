import { useAppSelector } from "app/hooks";
import { wn8Ranges } from "app/settings";
import Empty from "components/core/Empty";
import Tabs from "components/wot/Tabs";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import { getWNValueByColor, sortByWN8 } from "helpers/user";
import { WN8ArrayInterface } from "interfaces/WN8ArrayInterface";
import React from "react";
import { selectUser } from "reducers/wotSlice";
import { WN8_AVERAGE, WN8_BAD, WN8_BELOW_AVERAGE, WN8_VERY_BAD } from "styles/colors";

function LoggedUserTabsTanks() {
  const user = useAppSelector(selectUser);

  const account_tabs = [
    {
      translation: 'recently.played.tanks',
      component: (
        <>
          {user && user.response.recently.length === 0 && (
            <Empty translation={`tanks.list.empty`} />
          )}

          <TanksListAndFilters
            tanks_stats={user?.response?.recently}
            grid_props={{ xl: 3 }}
            card_props={{ battle_ago: true, weight: true }}
            nofilters
          />
        </>
      )
    },
    {
      translation: 'possible.improvement',
      component: (
        <>
          {!!user?.response?.player?.tanksStats && (
            <TanksListAndFilters
              tanks_stats={sortByWN8<WN8ArrayInterface>(
                user.response.player.tanksStats,
                true
              )}
              grid_props={{ xl: 3 }}
              card_props={{ weight: true }}
              default_battles={[0, 20]}
              max_battles={100}
              custom={{ wn8: true, battles: true, tier: true }}
              default_wn8={[
                getWNValueByColor(wn8Ranges, WN8_VERY_BAD),
                getWNValueByColor(wn8Ranges, WN8_BAD),
                getWNValueByColor(wn8Ranges, WN8_BELOW_AVERAGE),
                getWNValueByColor(wn8Ranges, WN8_AVERAGE)
              ]}
            />
          )}
        </>
      )
    },
  ];

  return (
    <Tabs tabs={account_tabs} />
  );
}

export default LoggedUserTabsTanks;
