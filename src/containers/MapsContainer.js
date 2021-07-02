import { Grid } from "@material-ui/core";
import MapsList from "components/wot/maps/MapsList";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
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
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          {maps?.response && (
            <MapsList maps={maps?.response} />
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <MapRotatorPage />
        </Grid>
      </Grid>
    </WotOverlay>
  );
}
