import { Grid } from "@material-ui/core";
import Tank from "components/wot/tanks/Tank";
import { tanksFilters } from "helpers/tanks";
import React from "react";

export default function TanksStatsList({ tanks_stats = [], grid_props = {}, filters = {}, ...props }) {
  const tanks = tanksFilters(tanks_stats, filters);

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
            stats={{
              wn8: tank_stat?.wn8?.wn ?? tank_stat?.wn8 ?? -1,
              wn7: tank_stat?.wn7?.wn ?? tank_stat?.wn7 ?? -1,
              weight: tank_stat?.wn8?.weight ?? tank_stat?.weight ?? -1,
              efficiency: tank_stat?.efficiency?.wn ?? tank_stat?.efficiency ?? -1
            }}
            {...props}
          />
        </Grid>
      ))}
    </Grid>
  );
}
