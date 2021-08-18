import { TANK_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import React, { SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";

type TankProfileButtonType = {
  tank_id: number,
  small?: boolean,
  large?: boolean
}

export default function TankProfileButton({ tank_id, small, large }: TankProfileButtonType) {
  const history = useHistory();
  const url = fillRoute(TANK_URL, { tank_id: tank_id });

  const handleProfileClick = (event: SyntheticEvent) => {
    event.preventDefault();

    return history.push(url);
  }

  return (
    <ButtonInput
      color={`secondary`}
      onClick={handleProfileClick}
      href={url}
      label={`see.profile`}
      small={small}
      large={large}
    />
  );
}
