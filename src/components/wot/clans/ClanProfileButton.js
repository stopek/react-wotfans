import { CLAN_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { useHistory } from "react-router-dom";

export default function ClanProfileButton({ tag = '' }) {
  const history = useHistory();
  const url = fillRoute(CLAN_URL, { tag: tag });

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
    />
  );
}
