import { Grid } from "@material-ui/core";
import { nationList, premiumFilter, tiersList, typeList, wn8Ranges } from "app/settings";
import RangeInput from "components/ui/input/RangeInput";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import React, { useState } from "react";

export default function TankFilters({ filters, setFilters, custom = {}, settings = {} }) {
  const [name, setName] = useState(filters?.tank_name || '');
  const [timer, setTimer] = useState(null);

  const set = (name_value) => {
    setFilters(Object.assign({}, filters, name_value));
  }

  const setNameHandle = (value) => {
    setName(value);

    clearTimeout(timer);

    setTimer(setTimeout(() => {
      set({ tank_name: value });
    }, 1000));
  }

  return (
    <Grid container spacing={2}>
      {custom?.name && (
        <Grid item md xs={12}>
          <TextInput
            label={`tank.name`}
            onChange={(value) => setNameHandle(value)}
            value={name}
            variant={`standard`}
          />
        </Grid>
      )}

      {custom?.tier && (
        <Grid item md xs={6}>
          <SelectInput
            current={filters?.tier || []}
            variant={`standard`}
            translation={`tier`}
            onChange={(value) => set({ tier: value })}
            options={settings?.tiersList || tiersList}
            multiple
            render_checkbox
          />
        </Grid>
      )}

      {custom?.nation && (
        <Grid item md xs={6}>
          <SelectInput
            current={filters?.nation || []}
            variant={`standard`}
            translation={`nation`}
            onChange={(value) => set({ nation: value })}
            options={nationList}
            multiple
            render_checkbox
          />
        </Grid>
      )}

      {custom?.type && (
        <Grid item md xs={6}>
          <SelectInput
            current={filters?.type || []}
            variant={`standard`}
            translation={`type`}
            onChange={(value) => set({ type: value })}
            options={typeList}
            multiple
            render_checkbox
          />
        </Grid>
      )}

      {custom?.premium && (
        <Grid item md xs={6}>
          <SelectInput
            current={filters?.premium || ''}
            variant={`standard`}
            translation={`premium`}
            onChange={(value) => set({ premium: value })}
            options={[{ translation: 'all.items', value: '' }].concat(premiumFilter)}
          />
        </Grid>
      )}

      {custom?.wn8 && (
        <Grid item md xs={6}>
          <SelectInput
            current={filters?.wn8 || []}
            variant={`standard`}
            translation={`wn8.filter`}
            options={wn8Ranges}
            onChange={(value) => set({ wn8: value })}
            multiple={true}
            render_checkbox={true}
          />
        </Grid>
      )}

      {custom?.battles && (
        <Grid item md xs={6}>
          <RangeInput
            onChange={(value) => set({ battles: value })}
            value={filters?.battles || []}
            step={5}
            max={settings?.max_battles ?? 100}
            label={`battles`}
          />
        </Grid>
      )}
    </Grid>
  );
}
