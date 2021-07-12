import Empty from "components/core/Empty";
import Tabs from "components/wot/Tabs";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";

export default function LoggedUserTabsTanks() {
  const user = useSelector(selectUser);

  const data = {
    recently: user?.response?.recently ?? [],
    wrong: user?.response?.wrong ?? [],
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
    <Tabs tabs={account_tabs} />
  );
}
