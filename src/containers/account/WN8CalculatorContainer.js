import AccountOverlay from "overlays/Account";
import Wn8InfoPage from "pages/Wn8InfoPage";
import React from 'react';

export default function WN8CalculatorContainer({ ...props }) {
  return (
    <AccountOverlay {...props}>
      <Wn8InfoPage />
    </AccountOverlay>
  );
}
