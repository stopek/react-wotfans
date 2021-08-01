import { wn7Ranges } from "app/settings";
import ColorStatBox from "components/wot/ColorStatBox";
import { WnBarDefaultPropType, WnBarPropType } from "proptypes/WnBarPropType";
import React from "react";
import { WnBarType } from "types/WnBarType";

function WN7Bar({ value, unit, large, small }: WnBarType) {
  return (
    <ColorStatBox
      unit={unit}
      large={large}
      value={value}
      small={small}
      list={wn7Ranges}
    />
  );
}

WN7Bar.propTypes = WnBarPropType;
WN7Bar.defaultProps = WnBarDefaultPropType;

export default WN7Bar;
