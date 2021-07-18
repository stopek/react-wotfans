import { Grid } from "@material-ui/core";
import SwitchInput from "components/ui/input/SwitchInput";
import TableUI from "components/ui/TableUI";
import DarkBox from "components/wot/DarkBox";
import TankFilters from "components/wot/tanks/TankFilters";
import TankSmallCard from "components/wot/tanks/TankSmallCard";
import { valueFormat } from "helpers/priceFormat";
import { getTranslationByTankType, tanksFilters } from "helpers/tanks";
import React, { useState } from "react";
import { injectIntl } from "react-intl";

function ExpectedTanksFilteredList({ tanks = [], intl }) {
  const [filters, setFilters] = useState({});
  const [settings, setSettings] = useState({});

  if (!Object.keys(tanks)?.length) {
    return null;
  }

  tanks = tanksFilters(tanks, filters);

  const set = (name_value) => {
    setSettings(Object.assign({}, settings, name_value));
  }

  console.log(filters);

  return (
    <>
      <DarkBox>
        <TankFilters
          filters={filters}
          setFilters={setFilters}
        />
        <Grid container>
          {['type', 'tier', 'moe_1dmg', 'moe_2dmg', 'moe_3dmg', 'battles'].map((option) => (
            <Grid item md sm={6} xs={6} key={`filter-expected-${option}`}>
              <SwitchInput
                checked={settings[option] || false}
                translation={`hide.${option}`}
                onChange={(checked) => set({ [option]: checked })}
              />
            </Grid>
          ))}
        </Grid>
      </DarkBox>

      {tanks?.length > 0 && (
        <TableUI
          headers={[
            { id: 'child' },
            { id: 'name', translation: 'tank.name' },
            { id: 'type', translation: 'tank.type' },
            { id: 'tier', translation: 'tier' },
            { id: 'moe_1dmg', translation: 'moe.1dmg' },
            { id: 'moe_2dmg', translation: 'moe.2dmg' },
            { id: 'moe_3dmg', translation: 'moe.3dmg' },
            { id: 'battles', translation: 'battles' },
          ]}
          exclude={settings}
          items={tanks}
          parse={(item) => {
            return {
              name: item.tank?.name,
              type: intl.formatMessage({ id: getTranslationByTankType(item.tank?.type) }),
              tier: item?.tank?.tier,
              moe_1dmg: valueFormat(item.moe_1dmg),
              moe_2dmg: valueFormat(item.moe_2dmg),
              moe_3dmg: valueFormat(item.moe_3dmg),
              battles: item.battles,
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

export default injectIntl(ExpectedTanksFilteredList);
