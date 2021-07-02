import { Grid } from "@material-ui/core";
import MapCard from "components/wot/maps/MapCard";
import React from "react";

export default function MapsList({ maps = [] }) {
  return (
    <Grid spacing={2} container>
      {maps.map((map) => (
        <Grid item xs={12} md={6}>
          <MapCard map={map} key={`map-${map.id}`} height={400} />
        </Grid>
      ))}
    </Grid>
  );
}
