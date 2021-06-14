import SelectInput from "components/ui/input/SelectInput";
import DarkBox from "components/wot/DarkBox";
import TanksList from "components/wot/tanks/TanksList";
import React, { useState } from "react";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const getTiersFromTanks = (tanks = []) => {
  tanks = Object.values(tanks);
  if (!tanks?.length) {
    return [];
  }

  let tiers = [];
  tanks.forEach((tank) => {
    tiers.push(tank.tier);
  });

  tiers = tiers.filter(onlyUnique).sort(function (a, b) {
    return a - b;
  });

  const key_value = [];
  tiers.forEach((tier) => {
    key_value.push({ label: tier, value: tier });
  });

  return key_value;
}

export default function TanksListAndFilters({ tanks = [] }) {
  const [tier, setTier] = useState('');
  if (!Object.keys(tanks)?.length) {
    return null;
  }

  const tiersOptions = [{ label: 'Wszystkie', value: '' }].concat(getTiersFromTanks(tanks));

  tanks = Object.values(tanks);
  tanks = tanks.sort(function (a, b) {
    return b.wn8 - a.wn8;
  });

  return (
    <>
      <DarkBox>
        <SelectInput
          value={tier || null}
          variant={`standard`}
          label={`Filtruj tier`}
          onChange={(value) => setTier(value)}
          options={tiersOptions}
        />
      </DarkBox>

      <TanksList
        tanks={tanks}
        tier={tier}
      />
    </>
  );
}