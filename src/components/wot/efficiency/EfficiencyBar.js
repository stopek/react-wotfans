import { efficiencyRanges } from "app/settings";
import ColorStatBox from "components/wot/ColorStatBox";
import React from "react";

export default function EfficiencyBar({ value = -1, unit = '', large = false }) {
  return (
    <ColorStatBox
      unit={unit}
      large={large}
      value={value}
      list={efficiencyRanges}
    />
  );
}
