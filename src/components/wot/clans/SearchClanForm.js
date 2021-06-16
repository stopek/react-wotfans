import { FormGroup, Grid } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import TextInput from "components/ui/input/TextInput";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

export default function SearchClanForm({ submit }) {
  const [clan, setClan] = useState('');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form onSubmit={(event) => submit(event, clan)}>
          <FormGroup>
            <TextInput
              required
              onChange={(value) => setClan(value)}
              value={clan}
              variant={`standard`}
              label={<FormattedMessage id={`type.clan.name`} />}
            />

            <ButtonInput label={<FormattedMessage id={`search.clan`} />} />
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  );
}