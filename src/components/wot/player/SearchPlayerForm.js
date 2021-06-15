import ButtonInput from "components/ui/input/ButtonInput";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

export default function SearchPlayerForm({ submit }) {
  const [player, setPlayer] = useState('');
  const [type, setType] = useState(0);

  const data = (type === 1 ? { player_name: player } : { account_id: player });

  return (
    <form onSubmit={(event) => submit(event, data)}>
      <SelectInput
        value={type}
        variant={`standard`}
        label={<FormattedMessage id={`search.player.type`} />}
        onChange={(value) => setType(value)}
        options={[
          { value: 1, label: <FormattedMessage id={`search.by.name`} /> },
          { value: 2, label: <FormattedMessage id={`search.by.id`} /> }
        ]}
      />
      {type > 0 && (
        <>
          <TextInput
            required
            onChange={(value) => setPlayer(value)}
            value={player}
            variant={`standard`}
            type={type === 1 ? `text` : `number`}
            label={
              <FormattedMessage id={type === 1 ? 'type.player.name' : 'type.player.id'} />
            }
          />

          <ButtonInput label={<FormattedMessage id={`search.player`} />} large />
        </>
      )}
    </form>
  );
}