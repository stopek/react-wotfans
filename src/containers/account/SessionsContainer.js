import PlayerSessions from "components/wot/player/PlayerSessions";
import Tabs from "components/wot/Tabs";
import AccountOverlay from "overlays/Account";
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "reducers/wotSlice";

export default function SessionsContainer({ ...props }) {
  const user = useSelector(selectUser);

  const statistics_tab = [
    {
      translation: 'login.sessions',
      component: (
        <PlayerSessions
          sessions={user?.response?.player?.users}
          session_id={user?.response?.session_id}
        />
      )
    },
  ];

  return (
    <AccountOverlay {...props}>
      {user?.response && (
        <Tabs tabs={statistics_tab} />
      )}
    </AccountOverlay>
  );
}
