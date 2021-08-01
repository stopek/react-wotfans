import { wn8Ranges } from "app/settings";
import ColorStatBox from "components/wot/ColorStatBox";
import { WnBarDefaultPropType, WnBarPropType } from "proptypes/WnBarPropType";
import React from "react";
import { WnBarType } from "types/WnBarType";

function Wn8Bar({ value, unit, large, small }: WnBarType) {
  return (
    <ColorStatBox
      unit={unit}
      large={large}
      value={value}
      small={small}
      list={wn8Ranges}
    />
  );
}

Wn8Bar.propTypes = WnBarPropType;
Wn8Bar.defaultProps = WnBarDefaultPropType;

export default Wn8Bar;
