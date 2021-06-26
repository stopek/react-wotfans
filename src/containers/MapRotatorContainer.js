import { Grid } from "@material-ui/core";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React from 'react';

export default function MapRotatorContainer({ ...props }) {
  return (
    <WotOverlay {...props}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <MapRotatorPage />
        </Grid>
      </Grid>
    </WotOverlay>
  );
}
