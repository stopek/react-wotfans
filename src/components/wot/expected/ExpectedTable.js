import TableUI from "components/ui/TableUI";
import TankSmallCard from "components/wot/tanks/TankSmallCard";
import { valueFormat } from "helpers/priceFormat";
import { getTranslationByTankType } from "helpers/tanks";
import React from "react";
import { injectIntl } from "react-intl";

function ExpectedTable({ tanks = [], settings = {}, intl }) {
  return (
    <>
      {tanks?.length > 0 && (
        <TableUI
          headers={[
            { id: 'child' },
            { id: 'name', translation: 'tank.name' },
            { id: 'type', translation: 'tank.type' },
            { id: 'tier', translation: 'tier' },
            { id: 'damage', translation: 'exp.damage' },
            { id: 'def', translation: 'exp.def' },
            { id: 'frag', translation: 'exp.frag' },
            { id: 'spot', translation: 'exp.spot' },
            { id: 'win', translation: 'exp.win' },
          ]}
          exclude={settings}
          items={tanks}
          parse={(item) => {
            return {
              name: item.tank?.name,
              type: intl.formatMessage({ id: getTranslationByTankType(item.tank?.type) }),
              tier: item?.tank?.tier,
              damage: valueFormat(item.damage),
              def: valueFormat(item.def),
              frag: valueFormat(item.frag),
              spot: valueFormat(item.spot),
              win: valueFormat(item.win),
              child: {
                child: <TankSmallCard tank={item.tank} />
              }
            }
          }}
        />
      )}
    </>
  );
}

export default injectIntl(ExpectedTable);
