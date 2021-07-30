import { Grid } from "@material-ui/core";
import WotOverlay from "overlays/WotOverlay";
import MapRotatorPage from "pages/MapRotatorPage";
import MapsListPage from "pages/MapsListPage";
import React from 'react';

export default function MapsListContainer({ ...props }) {
  return (
    <WotOverlay {...props}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <MapRotatorPage ads limit={[1, 5]} />
        </Grid>

        <Grid item md={8} xs={12}>
          <MapsListPage />
        </Grid>
      </Grid>
    </WotOverlay>
  );
}
