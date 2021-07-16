import { Grid } from "@material-ui/core";
import LoggedUserCard from "components/wot/user/LoggedUserCard";
import LoggedUserTabsChart from "components/wot/user/LoggedUserTabsChart";
import LoggedUserTabsTanks from "components/wot/user/LoggedUserTabsTanks";
import WotOverlay from "overlays/Wot";
import MapRotatorPage from "pages/MapRotatorPage";
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";

export default function AccountContainer({ ...props }) {
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
            <LoggedUserTabsChart />
            <LoggedUserTabsTanks />
          </Grid>
        </Grid>
      )}
    </WotOverlay>
  );
}
