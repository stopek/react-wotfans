import TableUI from "components/ui/TableUI";
import { valueFormat } from "helpers/priceFormat";
import React from "react";

export default function MoeTanksChanges({ moe = [] }) {
  return (
    <TableUI
      headers={[
        { id: 'version', translation: 'version' },
        { id: 'moe_1dmg', translation: 'moe.1dmg' },
        { id: 'moe_2dmg', translation: 'moe.2dmg' },
        { id: 'moe_3dmg', translation: 'moe.3dmg' },
        { id: 'battles', translation: 'battles' },
      ]}
      items={moe}
      rowsPerPateOptions={[10, 15, 25]}
      without_top
      parse={(item) => {
        return {
          version: item?.update_owner?.version,
          moe_1dmg: valueFormat(item.moe_1dmg),
          moe_2dmg: valueFormat(item.moe_2dmg),
          moe_3dmg: valueFormat(item.moe_3dmg),
          battles: item.battles
        }
      }}
    />
  );
}
