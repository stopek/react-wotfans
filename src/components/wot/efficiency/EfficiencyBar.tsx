import { efficiencyRanges } from "app/settings";
import ColorStatBox from "components/wot/ColorStatBox";
import { WnBarDefaultPropType, WnBarPropType } from "proptypes/WnBarPropType";
import React from "react";
import { WnBarType } from "types/WnBarType";

function EfficiencyBar({ value, unit, large, small }: WnBarType) {
  return (
    <ColorStatBox
      unit={unit}
      large={large}
      value={value}
      small={small}
      list={efficiencyRanges}
    />
  );
}

EfficiencyBar.propTypes = WnBarPropType;
EfficiencyBar.defaultProps = WnBarDefaultPropType;

export default EfficiencyBar;
