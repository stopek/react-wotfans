import { Grid } from "@material-ui/core";
import MapCard from "components/wot/maps/MapCard";
import PropTypes from 'prop-types';
import { MapPropType } from "proptypes/MapPropType";
import React from "react";

function MapsList({ maps }) {
  return (
    <Grid spacing={2} container>
      {maps.map((map) => (
        <Grid item xs={12} md={6} xl={4} key={`map-${map.id}`}>
          <MapCard map={map} />
        </Grid>
      ))}
    </Grid>
  );
}

MapsList.propTypes = {
  maps: PropTypes.arrayOf(MapPropType)
}

export default MapsList;
