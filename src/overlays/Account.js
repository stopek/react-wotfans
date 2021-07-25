import { Grid, Hidden } from "@material-ui/core";
import { LOGIN_URL } from "app/routes";
import LoggedUserCard from "components/wot/user/LoggedUserCard";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { selectUnauthorized, selectUser } from "reducers/wotSlice";

export default function AccountOverlay({ main = false, children, ...props }) {
  const user = useSelector(selectUser);
  const unauthorized = useSelector(selectUnauthorized);

  if (unauthorized) {
    return <Redirect to={LOGIN_URL} />
  }

  return (
    <WotOverlay {...props}>
      {user?.response && (
        <Grid container spacing={2}>
          {!main && (
            <Grid item md={4} xs={12}>
              <Hidden smDown>
                <LoggedUserCard />
                <MapRotatorPage limit={[1, 7]} filter />
              </Hidden>
            </Grid>
          )}

          {main && (
            <Grid item md={4} xs={12}>
              <LoggedUserCard />
              <MapRotatorPage limit={[1, 7]} filter />
            </Grid>
          )}

          <Grid item md={8} xs={12}>
            {children}
          </Grid>
        </Grid>
      )}
    </WotOverlay>
  );
}
