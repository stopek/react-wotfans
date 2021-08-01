import { Grid } from "@material-ui/core";
import Error from "components/core/Error";
import SwitchInput from "components/ui/input/SwitchInput";
import DarkBox from "components/wot/DarkBox";
import ExpectedTable from "components/wot/expected/ExpectedTable";
import TankFilters from "components/wot/tanks/TankFilters";
import { tanksFilters } from "helpers/tanks";
import { ExpectedListInterface } from "interfaces/ExpectedListInterface";
import React, { useState } from "react";

type ExpectedTanksFilteredList = {
  tanks: ExpectedListInterface[]
}

interface SettingsInterface {
  [x: string]: boolean | undefined
}

export default function ExpectedTanksFilteredList({ tanks = [] }: ExpectedTanksFilteredList) {
  const [filters, setFilters] = useState({});
  const [settings, setSettings] = useState<SettingsInterface>({});

  if (!Object.keys(tanks)?.length) {
    return null;
  }

  tanks = tanksFilters(tanks, filters);

  const set = (name_value: Record<string, boolean>) => {
    setSettings(Object.assign({}, settings, name_value));
  }

  return (
    <>
      <DarkBox>
        <>
          <TankFilters
            filters={filters}
            setFilters={setFilters}
            custom={{ type: true, tier: true, nation: true, tank_name: true, premium: true }}
          />
          <Grid container>
            {['type', 'tier', 'damage', 'def', 'frag', 'spot', 'win'].map((option) => (
              <Grid item md sm={6} xs={6} key={`filter-expected-${option}`}>
                <SwitchInput
                  checked={settings[option] || false}
                  translation={`hide.${option}`}
                  onChange={(checked) => set({ [option]: checked })}
                />
              </Grid>
            ))}
          </Grid>
        </>
      </DarkBox>

      {!tanks?.length && (
        <Error message={`loading.not.found`} surprise={`nothingness`} />
      )}

      <ExpectedTable tanks={tanks} settings={settings} />
    </>
  );
}
