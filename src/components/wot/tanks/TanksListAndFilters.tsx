import DarkBox from "components/wot/DarkBox";
import TankFilters from "components/wot/tanks/TankFilters";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import { getTiersFromTanksStats } from "helpers/tanks";
import { TankStatInterface } from "interfaces/TankStatInterface";
import PropTypes from "prop-types";
import React, { useState } from "react";

type TanksListAndFiltersType = {
  tanks_stats?: TankStatInterface[],
  grid_props?: object,
  card_props?: object,
  default_tier?: number[],
  max_battles?: number,
  default_wn8?: number[],
  default_battles?: number[],
  nofilters?: boolean,
  custom?: object
}

function TanksListAndFilters(
  {
    tanks_stats,
    grid_props,
    card_props,
    default_tier,
    max_battles,
    default_wn8,
    default_battles,
    nofilters,
    custom = {}
  }: TanksListAndFiltersType
) {
  const [filters, setFilters] = useState({
    battles: default_battles,
    wn8: default_wn8,
    tier: default_tier
  });

  if (!tanks_stats) {
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

TanksListAndFilters.propTypes = {
  tanks_stats: PropTypes.array,
  grid_props: PropTypes.object,
  card_props: PropTypes.object,
  default_tier: PropTypes.arrayOf(PropTypes.number),
  max_battles: PropTypes.number,
  default_wn8: PropTypes.arrayOf(PropTypes.number),
  nofilter: PropTypes.bool,
  custom: PropTypes.object,
}

TanksListAndFilters.defaultProps = {
  default_battles: [0, 7000]
}

export default TanksListAndFilters;
