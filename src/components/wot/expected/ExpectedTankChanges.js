import TableUI from "components/ui/TableUI";
import { valueFormat } from "helpers/priceFormat";
import React from "react";

export default function ExpectedTankChanges({ expected = [] }) {
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
      items={expected}
      rowsPerPateOptions={[10, 15, 25]}
      without_top
      parse={(item) => {
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
