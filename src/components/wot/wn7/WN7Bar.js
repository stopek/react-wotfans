import { wn7Ranges } from "app/settings";
import ColorStatBox from "components/wot/ColorStatBox";
import React from "react";

export default function WN7Bar({ value = -1, unit = '', large = false }) {
  return (
    <ColorStatBox
      unit={unit}
      large={large}
      value={value}
      list={wn7Ranges}
    />
  );
}
