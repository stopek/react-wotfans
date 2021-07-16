import { Grid } from "@material-ui/core";
import { wn8Ranges } from "app/settings";
import RangeInput from "components/ui/input/RangeInput";
import SelectInput from "components/ui/input/SelectInput";
import DarkBox from "components/wot/DarkBox";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import React, { useState } from "react";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const getTiersFromTanksStats = (tanks_stats = []) => {
  tanks_stats = Object.values(tanks_stats);
  if (!tanks_stats?.length) {
    return [];
  }

  let tiers = [];
  tanks_stats.forEach((tank_stat) => {
    tiers.push(tank_stat.tank.tier);
  });

  tiers = tiers.filter(onlyUnique).sort(function (a, b) {
    return a - b;
  });

  const key_value = [];
  tiers.forEach((tier) => {
    key_value.push({ label: tier, value: tier });
  });

  return key_value;
}

export default function TanksListAndFilters(
  {
    tanks_stats = [],
    grid_props = {},
    card_props = {},
    default_tier = [],
    max_battles= 10000,
    default_wn8 = [],
    default_battles = [0, 7000]
  }
) {
  const [tier, setTier] = useState(default_tier);
  const [wn8, setWn8] = useState(default_wn8);
  const [battles, setBattles] = useState(default_battles);

  if (!Object.keys(tanks_stats)?.length) {
    return null;
  }

  return (
    <>
      <DarkBox>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <SelectInput
              current={tier}
              variant={`standard`}
              translation={`tier.filter`}
              onChange={(value) => setTier(value)}
              options={getTiersFromTanksStats(tanks_stats)}
              multiple={true}
              render_checkbox={true}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <SelectInput
              current={wn8}
              variant={`standard`}
              translation={`wn8.filter`}
              options={wn8Ranges}
              onChange={(value) => setWn8(value)}
              multiple={true}
              render_checkbox={true}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <RangeInput
              onChange={(value) => setBattles(value)}
              value={battles}
              step={5}
              max={max_battles}
              label={`battles`}
            />
          </Grid>
        </Grid>
      </DarkBox>

      <TanksStatsList
        tanks_stats={tanks_stats}
        filters={{
          tier: tier,
          wn8: wn8,
          battles: battles
        }}
        grid_props={grid_props}
        {...card_props}
      />
    </>
  );
}
