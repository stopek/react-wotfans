import { Grid } from "@material-ui/core";
import SwitchInput from "components/ui/input/SwitchInput";
import DarkBox from "components/wot/DarkBox";
import ExpectedTable from "components/wot/expected/ExpectedTable";
import TankFilters from "components/wot/tanks/TankFilters";
import { tanksFilters } from "helpers/tanks";
import React, { useState } from "react";

export default function ExpectedTanksFilteredList({ tanks = [] }) {
  const [filters, setFilters] = useState({});
  const [settings, setSettings] = useState({});

  if (!Object.keys(tanks)?.length) {
    return null;
  }

  tanks = tanksFilters(tanks, filters);

  const set = (name_value) => {
    setSettings(Object.assign({}, settings, name_value));
  }

  return (
    <>
      <DarkBox>
        <TankFilters
          filters={filters}
          setFilters={setFilters}
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
      </DarkBox>

      <ExpectedTable tanks={tanks} />
    </>
  );
}
