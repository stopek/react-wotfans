import { Grid } from "@material-ui/core";
import LoggedUserCard from "components/wot/user/LoggedUserCard";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";

export default function AccountOverlay({ children, ...props }) {
  const user = useSelector(selectUser);
  return (
    <WotOverlay {...props}>
      {user?.response && (
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <LoggedUserCard />
            <MapRotatorPage limit={[1, 12]} filter />
          </Grid>

          <Grid item md={8} xs={12}>
            {children}
          </Grid>
        </Grid>
      )}
    </WotOverlay>
  );
}
