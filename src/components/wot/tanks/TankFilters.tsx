import { Grid } from "@material-ui/core";
import { nationList, premiumFilter, tiersList, typeList, wn8Ranges } from "app/settings";
import RangeInput from "components/ui/input/RangeInput";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import CountDownProgressCircular from "components/ui/progress/CountDownProgressCircular";
import { SearchTankFormInterface } from "interfaces/form/SearchTankFormInterface";
import React, { useState } from "react";

type CustomTypes<T> = {
  [P in keyof T]?: boolean
}

type TankFiltersType = {
  filters: SearchTankFormInterface,
  setFilters: (values: SearchTankFormInterface) => any,
  custom: CustomTypes<SearchTankFormInterface>,
  settings?: {
    tiersList?: [],
    max_battles?: number
  }
}

type SetType<T> = {
  [P in keyof T]?: T[P]
}

function TankFilters({ filters, setFilters, custom, settings }: TankFiltersType) {
  const ms = 1000;

  const [name, setName] = useState(filters?.tank_name || '');
  const [timer, setTimer] = useState<number | undefined>();

  const set = (name_value: SetType<SearchTankFormInterface>) => {
    clearTimeout(timer);
    setTimer(undefined);

    const newFilters = Object.assign({}, filters, name_value);
    setFilters(newFilters);
  }


  const setNameHandle = (value: string) => {
    setName(value);

    clearTimeout(timer);

    const timerId: number = window.setTimeout(() => {
      set({ tank_name: value });
    }, ms);

    setTimer(timerId);
  }

  return (
    <Grid container spacing={2}>
      {custom?.tank_name && (
        <Grid item md xs={12}>
          <TextInput
            label={`tank.name`}
            handleChange={(value) => setNameHandle(value)}
            value={name}
            variant={`standard`}
            suffix={!!timer ?
              <CountDownProgressCircular key={`progress-${timer}`} size={15} start={ms} steps={10} /> : <></>}
          />
        </Grid>
      )}

      {custom?.tier && (
        <Grid item md xs={6}>
          <SelectInput
            current={filters?.tier || []}
            variant={`standard`}
            translation={`tier`}
            handleChange={(value) => set({ tier: value })}
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
            handleChange={(value) => set({ nation: value })}
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
            handleChange={(value) => set({ type: value })}
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
            handleChange={(value) => set({ premium: value })}
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
            handleChange={(value) => set({ wn8: value })}
            multiple={true}
            render_checkbox={true}
          />
        </Grid>
      )}

      {custom?.battles && (
        <Grid item md xs={6}>
          <RangeInput
            handleChange={(value) => set({ battles: Array.isArray(value) ? value : [value, value] })}
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

export default TankFilters;
