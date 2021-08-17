import { Grid } from "@material-ui/core";
import Tank, { TankCardSettingsInterface } from "components/wot/tanks/Tank";
import { TankInterface } from "interfaces/TankInterface";
import React from "react";

type TanksListType = {
  tanks: TankInterface[],
  card_props: TankCardSettingsInterface
}

function TanksList({ tanks, card_props }: TanksListType) {
  return (
    <Grid container spacing={1}>
      {tanks.map((tank) => (
        <Grid
          key={`tank-${tank?.id}`}
          item sm={6} xs={12} md={4} lg={3} xl={2}
        >
          <Tank
            tank={tank}
            {...card_props}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default TanksList;
