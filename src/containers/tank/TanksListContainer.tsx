import { Grid } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { nationList, premiumFilter, tiersList, typeList } from "app/settings";
import ButtonInput from "components/ui/input/ButtonInput";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import Paginator from "components/ui/Paginator";
import TanksList from "components/wot/tanks/TanksList";
import WotOverlay from "overlays/WotOverlay";
import React, { useEffect, useState } from 'react';
import { loadTanks, selectTanks } from "reducers/wotSlice";

export default function TanksListContainer({ ...props }) {
  const dispatch = useAppDispatch();
  const tanks = useAppSelector(selectTanks);

  const [page, setPage] = useState(1);
  const [tier, setTier] = useState('');
  const [nation, setNation] = useState('');
  const [type, setType] = useState('');
  const [premium, setPremium] = useState('');
  const [tank_name, setTankName] = useState('');

  const search = (page: number) => {
    dispatch<any>(loadTanks({ page, nation, tier, type, premium, tank_name }));
  }

  useEffect(() => {
    setPage(1);
    search(1);
  }, [dispatch, tier, nation, type, premium]);

  return (
    <WotOverlay {...props}>
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              label={`tank.name`}
              handleChange={(value) => setTankName(value)}
              value={tank_name}
              variant={`standard`}
              autoFocus
              suffix={<ButtonInput label={`search.tank`} variant={`text`} onClick={() => search(1)} />}
            />
          </Grid>
          <Grid item md xs={6}>
            <SelectInput
              current={tier}
              variant={`standard`}
              translation={`tier`}
              handleChange={(value: string) => setTier(value)}
              options={[{ label: '', value: 0 }].concat(tiersList)}
            />
          </Grid>
          <Grid item md xs={6}>
            <SelectInput
              current={nation}
              variant={`standard`}
              translation={`nation`}
              handleChange={(value: string) => setNation(value)}
              options={[{ translation: 'all.items', value: '' }].concat(nationList)}
            />
          </Grid>
          <Grid item md xs={6}>
            <SelectInput
              current={type}
              variant={`standard`}
              translation={`type`}
              handleChange={(value: string) => setType(value)}
              options={[{ translation: 'all.items', value: '' }].concat(typeList)}
            />
          </Grid>
          <Grid item md xs={6}>
            <SelectInput
              current={premium}
              variant={`standard`}
              translation={`premium`}
              handleChange={(value: string) => setPremium(value)}
              options={[{ translation: 'all.items', value: '' }].concat(premiumFilter)}
            />
          </Grid>
        </Grid>

        {!!tanks?.response && (
          <>
            <TanksList
              tanks={tanks?.response?.data}
              card_props={{ no_wn8: true, price: true, no_stats: true, tank_profile: true }}
            />

            {tanks?.response?.pagination?.pages > 1 && (
              <Paginator
                page={page}
                count={tanks?.response?.pagination?.pages}
                onChange={(page: number) => setPage(page)}
              />
            )}
          </>
        )}
      </>
    </WotOverlay>
  );
}
