import { Grid } from "@material-ui/core";
import MapRotator from "components/wot/MapRotator";
import LoggedUserCard from "components/wot/player/LoggedUserCard";
import WotOverlay from "overlays/Wot";
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";

export default function AccountContainer({ ...props }) {
  const user = useSelector(selectUser);
  
  return (
    <WotOverlay {...props}>
      {user?.response && (
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <LoggedUserCard user={user?.response} />
          </Grid>
          <Grid item md={6} xs={12}>
            <MapRotator limit={6} />
          </Grid>
        </Grid>
      )}

    </WotOverlay>
  );
}