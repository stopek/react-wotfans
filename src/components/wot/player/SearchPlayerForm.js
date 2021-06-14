import ButtonInput from "components/ui/input/ButtonInput";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import React, { useState } from "react";

export default function SearchPlayerForm({ submit }) {
  const [player, setPlayer] = useState('');
  const [type, setType] = useState(0);

  const data = (type === 1 ? { player_name: player } : { account_id: player });

  return (
    <form onSubmit={(event) => submit(event, data)}>
      <SelectInput
        value={type}
        variant={`standard`}
        label={`Okreś sposób wyszukiwania gracza`}
        onChange={(value) => setType(value)}
        options={[
          { value: 1, label: 'Według nazwy gracza' },
          { value: 2, label: 'Według identyfikatora gracza' }
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
            label={type === 1 ? 'Wprowadź nazwę gracza' : 'Wprowadź identyfikator gracza'}
          />

          <ButtonInput label={`Szukaj gracza`} large />
        </>
      )}
    </form>
  );
}