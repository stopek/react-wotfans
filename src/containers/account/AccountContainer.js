import { Grid } from "@material-ui/core";
import LoggedUserCard from "components/wot/player/LoggedUserCard";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";

export default function AccountContainer({ ...props }) {
  const user = useSelector(selectUser);

  return (
    <WotOverlay {...props}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          {user?.response && (
            <LoggedUserCard user={user?.response} />
          )}
        </Grid>
        <Grid item md={6} xs={12}>
          <MapRotatorPage />
        </Grid>
      </Grid>
    </WotOverlay>
  );
}
