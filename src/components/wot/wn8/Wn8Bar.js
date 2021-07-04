import { wn8Ranges } from "app/settings";
import ColorStatBox from "components/wot/ColorStatBox";
import React from "react";

export default function Wn8Bar({ value = -1, unit = '', large = false, small = false }) {
  return (
    <ColorStatBox
      unit={unit}
      small={small}
      large={large}
      value={value}
      list={wn8Ranges}
    />
  );
}
