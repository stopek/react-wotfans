import { CLAN_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import React, { SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";

type ClanProfileButtonType = {
  tag: string
}

export default function ClanProfileButton({ tag, ...props }: ClanProfileButtonType) {
  const history = useHistory();
  const url = fillRoute(CLAN_URL, { tag: tag });

  const handleProfileClick = (event: SyntheticEvent) => {
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
      {...props}
    />
  );
}
