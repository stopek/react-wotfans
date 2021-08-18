import TableUI from "components/ui/TableUI";
import { valueFormat } from "helpers/priceFormat";
import { TankExpectedInterface } from "interfaces/TankExpectedInterface";
import PropTypes from "prop-types";
import React from "react";

type ExpectedTableType = {
  expected: TankExpectedInterface[]
}

function ExpectedTankChanges({ expected }: ExpectedTableType) {
  return (
    <TableUI
      headers={[
        { id: 'version', translation: 'version' },
        { id: 'damage', translation: 'exp.damage' },
        { id: 'def', translation: 'exp.def' },
        { id: 'frag', translation: 'exp.frag' },
        { id: 'spot', translation: 'exp.spot' },
        { id: 'win', translation: 'exp.win' },
      ]}
      items={expected as []}
      rowsPerPageOptions={[10, 15, 25]}
      without_top
      parse={(item: TankExpectedInterface) => {
        return {
          version: item?.update_owner?.version,
          damage: valueFormat(item.damage, 5),
          def: valueFormat(item.def, 5),
          frag: valueFormat(item.frag, 5),
          spot: valueFormat(item.spot, 5),
          win: valueFormat(item.win, 5),
        }
      }}
    />
  );
}

ExpectedTankChanges.propTypes = {
  expected: PropTypes.array
}

export default ExpectedTankChanges;
