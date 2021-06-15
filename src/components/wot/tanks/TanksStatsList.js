import { Grid } from "@material-ui/core";
import Tank from "components/wot/Tank";
import React from "react";

export default function TanksStatsList({ tanks_stats = [], tier = '', ...props }) {
  return (
    <Grid container spacing={2}>
      {tanks_stats
        .filter((tank_stat) => (tier !== '' ? tank_stat?.tank?.tier === tier : true))
        .map((tank_stat) => (
          <Grid
            key={`tank-${tank_stat?.tank?.id}`}
            item sm={6} xs={12} md={4} lg={3}
          >
            <Tank
              tank={tank_stat?.tank}
              statistics={tank_stat}
              stats={{ wn8: tank_stat?.wn8 || 0, weight: tank_stat?.weight || 0 }}
              {...props}
            />
          </Grid>
        ))}
    </Grid>
  );
}