import { Grid } from "@material-ui/core";
import { wn8Ranges } from "app/settings";
import Tank from "components/wot/Tank";
import React from "react";

export default function TanksStatsList({ tanks_stats = [], grid_props = {}, filters = {}, ...props }) {
  let tanks = Object.values(tanks_stats);

  if (filters?.tier?.length > 0) {
    tanks = tanks.filter((tank_stat) => filters?.tier.includes(tank_stat?.tank?.tier));
  }

  if (filters?.wn8?.length > 0) {
    const all_wn8 = wn8Ranges;
    const filter_wn8 = filters?.wn8;

    tanks = tanks.filter((tank_stat) => {
      let result = false;
      all_wn8.forEach((wn, key) => {
        const next = all_wn8[key + 1]?.value ?? 999999;

        if (filter_wn8.includes(wn.value) && tank_stat.wn8 >= wn.value && tank_stat.wn8 < next) {
          result = true;
        }
      });

      return result;
    });
  }

  return (
    <Grid container spacing={2}>
      {tanks.map((tank_stat) => (
        <Grid
          key={`tank-${tank_stat?.tank?.id}`}
          item sm={6} xs={12} md={4} lg={3} xl={2}
          {...grid_props}
        >
          <Tank
            tank={tank_stat?.tank}
            statistics={tank_stat}
            stats={{ wn8: tank_stat?.wn8 || 0, wn7: tank_stat?.wn7 || 0, weight: tank_stat?.weight || 0, efficiency: tank_stat?.efficiency || 0 }}
            {...props}
          />
        </Grid>
      ))}
    </Grid>
  );
}
