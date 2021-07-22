import DarkBox from "components/wot/DarkBox";
import TankFilters from "components/wot/tanks/TankFilters";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import { getTiersFromTanksStats } from "helpers/tanks";
import React, { useState } from "react";

export default function TanksListAndFilters(
  {
    tanks_stats = [],
    grid_props = {},
    card_props = {},
    default_tier = [],
    max_battles = 10000,
    default_wn8 = [],
    default_battles = [0, 7000],
    nofilters = false,
    custom = {}
  }
) {
  const [filters, setFilters] = useState({
    battles: default_battles,
    wn8: default_wn8,
    tier: default_tier
  });

  if (!Object.keys(tanks_stats)?.length) {
    return null;
  }

  return (
    <>
      {!nofilters && (
        <DarkBox>
          <TankFilters
            filters={filters}
            setFilters={setFilters}
            custom={custom}
            settings={{
              max_battles: max_battles,
              tiersList: getTiersFromTanksStats(tanks_stats)
            }}
          />
        </DarkBox>
      )}

      <TanksStatsList
        tanks_stats={tanks_stats}
        filters={filters}
        grid_props={grid_props}
        {...card_props}
      />
    </>
  );
}
