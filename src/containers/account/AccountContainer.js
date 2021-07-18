import LoggedUserTabsChart from "components/wot/user/LoggedUserTabsChart";
import LoggedUserTabsTanks from "components/wot/user/LoggedUserTabsTanks";
import AccountOverlay from "overlays/Account";
import React from 'react';

export default function AccountContainer({ ...props }) {
  return (
    <AccountOverlay {...props}>
      <LoggedUserTabsChart />
      <LoggedUserTabsTanks />
    </AccountOverlay>
  );
}
