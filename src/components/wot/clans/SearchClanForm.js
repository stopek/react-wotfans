import { Grid } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import RangeInput from "components/ui/input/RangeInput";
import TextInput from "components/ui/input/TextInput";
import React, { useState } from "react";

export default function SearchClanForm({ submit }) {
  const [clan, setClan] = useState('');
  const [amount, setAmount] = useState([0, 100]);

  return (
    <form onSubmit={(event) => submit(event, { clan_name: clan, amount: amount })}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextInput
            handleChange={(value) => setClan(value)}
            value={clan}
            variant={`standard`}
            autoFocus
            label={`type.clan.name`}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <RangeInput
            handleChange={(value) => setAmount(value)}
            value={amount}
            step={5}
            label={`amount`}
          />
        </Grid>

        <Grid item xs={12}>
          <ButtonInput
            label={`search.clan`}
            large
          />
        </Grid>
      </Grid>
    </form>
  );
}
