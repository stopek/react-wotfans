import { PLAYER_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import React from "react";

type PlayerProfileButton = {
  account_id: number | string,
  name: string
}

const PlayerProfileButton: React.FC<PlayerProfileButton> = ({ account_id, name, ...props }) => {
  const url = fillRoute(PLAYER_URL, { account_id: account_id, name: name });

  return (
    <ButtonInput
      color={`secondary`}
      href={url}
      route={url}
      label={`see.profile`}
      {...props}
    />
  );
}

export default PlayerProfileButton;
