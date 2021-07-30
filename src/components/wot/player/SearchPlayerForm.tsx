import ButtonInput from "components/ui/input/ButtonInput";
import TextInput from "components/ui/input/TextInput";
import { SearchPlayerFormInterface } from "interfaces/form/SearchPlayerFormInterface";
import PropTypes from "prop-types";
import React, { useState } from "react";

type SearchPlayerFormType = {
  submit: (event: React.SyntheticEvent, data: SearchPlayerFormInterface) => void
}

function SearchPlayerForm({ submit }: SearchPlayerFormType) {
  const [player, setPlayer] = useState('');

  return (
    <form onSubmit={(event) => submit(event, { player_name: player })}>
      <TextInput
        required
        onChange={(value: string) => setPlayer(value)}
        value={player}
        variant={`standard`}
        autoFocus
        label={`type.player.name`}
      />

      <ButtonInput label={`search.player`} large />
    </form>
  );
}

SearchPlayerForm.propTypes = {
  submit: PropTypes.func
}

export default SearchPlayerForm;
