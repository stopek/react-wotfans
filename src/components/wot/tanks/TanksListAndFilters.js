import SelectInput from "components/ui/input/SelectInput";
import DarkBox from "components/wot/DarkBox";
import TanksStatsList from "components/wot/tanks/TanksStatsList";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const getTiersFromTanksStats = (tanks_stats = []) => {
  tanks_stats = Object.values(tanks_stats);
  if (!tanks_stats?.length) {
    return [];
  }

  let tiers = [];
  tanks_stats.forEach((tank_stat) => {
    tiers.push(tank_stat.tank.tier);
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

export default function TanksListAndFilters({ tanks_stats = [] }) {
  const [tier, setTier] = useState('');
  if (!Object.keys(tanks_stats)?.length) {
    return null;
  }

  const tiersOptions = [{
    label: <FormattedMessage id={`all.items`} />,
    value: ''
  }].concat(getTiersFromTanksStats(tanks_stats));

  tanks_stats = Object.values(tanks_stats);
  tanks_stats = tanks_stats.sort(function (a, b) {
    return b.wn8 - a.wn8;
  });

  return (
    <>
      <DarkBox>
        <SelectInput
          value={tier || null}
          variant={`standard`}
          label={<FormattedMessage id={`tier.filter`} />}
          onChange={(value) => setTier(value)}
          options={tiersOptions}
        />
      </DarkBox>

      <TanksStatsList
        tanks_stats={tanks_stats}
        tier={tier}
      />
    </>
  );
}
