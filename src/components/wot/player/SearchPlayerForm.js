import ButtonInput from "components/ui/input/ButtonInput";
import TextInput from "components/ui/input/TextInput";
import React, { useState } from "react";

export default function SearchPlayerForm({ submit }) {
  const [player, setPlayer] = useState('');

  return (
    <form onSubmit={(event) => submit(event, { player_name: player })}>
      <TextInput
        required
        onChange={(value) => setPlayer(value)}
        value={player}
        variant={`standard`}
        autoFocus
        label={`type.player.name`}
      />

      <ButtonInput label={`search.player`} large />
    </form>
  );
}
