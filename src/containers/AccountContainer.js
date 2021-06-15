import LoggedUserCard from "components/wot/player/LoggedUserCard";
import { getToken } from "helpers/cookies";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "reducers/wotSlice";

function AccountContainer(...props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const storage_token = getToken();
    if (storage_token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <WotOverlay {...props}>
      {user?.response && <LoggedUserCard user={user?.response} />}
    </WotOverlay>
  );
}

export default AccountContainer;