import { TANK_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { useHistory } from "react-router-dom";

export default function TankProfileButton({ tank_id = 0, small, large }) {
  const history = useHistory();
  const url = fillRoute(TANK_URL, { tank_id: tank_id });

  const handleProfileClick = (event) => {
    event.preventDefault();
    return history.push(url);
  }

  return (
    <ButtonInput
      color={`secondary`}
      onClick={handleProfileClick}
      as={`a`}
      href={url}
      label={`see.profile`}
      small={small}
      large={large}
    />
  );
}
