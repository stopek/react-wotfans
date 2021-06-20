import { Grid } from "@material-ui/core";
import MapRotator from "components/wot/map_rotator/MapRotator";
import LoggedUserCard from "components/wot/player/LoggedUserCard";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMapGenerator, selectMapGenerator, selectUser } from "reducers/wotSlice";

export default function AccountContainer({ ...props }) {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const map_generator = useSelector(selectMapGenerator);

  useEffect(() => {
    dispatch(loadMapGenerator());
  }, [dispatch]);

  return (
    <WotOverlay {...props}>
      {user?.response && (
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <LoggedUserCard user={user?.response} />
          </Grid>
          {map_generator?.response && (
            <Grid item md={6} xs={12}>
              <MapRotator
                limit={6}
                maps={map_generator?.response}
                cycle={4}
                tier={`IX-X`}
              />
            </Grid>
          )}
        </Grid>
      )}
    </WotOverlay>
  );
}