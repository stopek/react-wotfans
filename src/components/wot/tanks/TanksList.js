import { Grid } from "@material-ui/core";
import Tank from "components/wot/tanks/Tank";
import React from "react";

export default function TanksList({ tanks = [], tier = '', ...props }) {
  return (
    <Grid container spacing={1}>
      {tanks.map((tank) => (
        <Grid
          key={`tank-${tank?.id}`}
          item sm={6} xs={12} md={4} lg={3} xl={2}
        >
          <Tank
            tank={tank}
            {...props}
          />
        </Grid>
      ))}
    </Grid>
  );
}
