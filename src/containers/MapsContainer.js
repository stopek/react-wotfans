import { Grid } from "@material-ui/core";
import MapCard from "components/wot/maps/MapCard";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMaps, selectLoadMaps } from "reducers/wotSlice";

export default function MapsContainer({ ...props }) {
  const dispatch = useDispatch();
  const maps = useSelector(selectLoadMaps);

  useEffect(() => {
    dispatch(loadMaps());
  }, [dispatch]);

  return (
    <WotOverlay {...props}>
      {maps?.response && (
        <Grid spacing={2} container>
          {maps.response.map((map) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <MapCard map={map} key={`map-${map.id}`} />
            </Grid>
          ))}
        </Grid>
      )}
    </WotOverlay>
  );
}