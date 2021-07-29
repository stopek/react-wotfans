import { Grid, Hidden } from "@material-ui/core";
import { LOGIN_URL } from "app/routes";
import { default_rotator_limit } from "app/settings";
import LoggedUserCard from "components/wot/user/LoggedUserCard";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { selectUnauthorized, selectUser } from "reducers/wotSlice";

function AccountOverlay({ main, children, ...props }) {
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
                <MapRotatorPage limit={default_rotator_limit} filter />
              </Hidden>
            </Grid>
          )}

          {main && (
            <Grid item md={4} xs={12}>
              <LoggedUserCard />
              <MapRotatorPage limit={default_rotator_limit} filter />
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

AccountOverlay.propTypes = {
  main: PropTypes.bool,
  children: PropTypes.element.isRequired
}

AccountOverlay.defaultProps = {
  main: false
}

export default AccountOverlay;
