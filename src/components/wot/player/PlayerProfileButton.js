import { PLAYER_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { useHistory } from "react-router-dom";

export default function PlayerProfileButton({ account_id = 0, name = '', ...props }) {
  const history = useHistory();
  const url = fillRoute(PLAYER_URL, { account_id: account_id, name: name });

  const handleProfileClick = (event) => {
    event.preventDefault();
    history.push(url);
  }

  return (
    <ButtonInput
      color={`secondary`}
      onClick={handleProfileClick}
      as={`a`}
      href={url}
      label={`see.profile`}
      {...props}
    />
  );
}
