import { Grid } from "@material-ui/core";
import { nationList, premiumFilter, tiersList, typeList } from "app/settings";
import ButtonInput from "components/ui/input/ButtonInput";
import SelectInput from "components/ui/input/SelectInput";
import TextInput from "components/ui/input/TextInput";
import Paginator from "components/ui/Paginator";
import TanksList from "components/wot/tanks/TanksList";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadTanks, selectTanks } from "reducers/wotSlice";

export default function TanksListContainer({ ...props }) {
  const dispatch = useDispatch();
  const tanks = useSelector(selectTanks);
  const [page, setPage] = useState(1);
  const [tier, setTier] = useState('');
  const [nation, setNation] = useState('');
  const [type, setType] = useState('');
  const [premium, setPremium] = useState('');
  const [tank_name, setTankName] = useState('');

  const search = (page) => {
    dispatch(loadTanks({ page, nation, tier, type, premium, tank_name }));
  }

  useEffect(() => {
    if (tanks?.pagination?.page !== page) {
      search(page);
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    search(1);
  }, [dispatch, tier, nation, type, premium]);


  return (
    <WotOverlay {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextInput
            translation={`tank.name`}
            onChange={(value) => setTankName(value)}
            value={tank_name}
            variant={`standard`}
            suffix={<ButtonInput label={`search.tank`} variant={`text`} onClick={() => search(1)} />}
          />
        </Grid>
        <Grid item md xs={6}>
          <SelectInput
            current={tier}
            variant={`standard`}
            translation={`tier`}
            onChange={(value) => setTier(value)}
            options={[{ translation: 'all.items', value: '' }].concat(tiersList)}
          />
        </Grid>
        <Grid item md xs={6}>
          <SelectInput
            current={nation}
            variant={`standard`}
            translation={`nation`}
            onChange={(value) => setNation(value)}
            options={[{ translation: 'all.items', value: '' }].concat(nationList)}
          />
        </Grid>
        <Grid item md xs={6}>
          <SelectInput
            current={type}
            variant={`standard`}
            translation={`type`}
            onChange={(value) => setType(value)}
            options={[{ translation: 'all.items', value: '' }].concat(typeList)}
          />
        </Grid>
        <Grid item md xs={6}>
          <SelectInput
            current={premium}
            variant={`standard`}
            translation={`premium`}
            onChange={(value) => setPremium(value)}
            options={[{ translation: 'all.items', value: '' }].concat(premiumFilter)}
          />
        </Grid>
      </Grid>

      {tanks?.response && (
        <>
          <TanksList
            tanks={tanks?.response?.data}
            no_wn8 price no_stats tank_profile
          />

          {tanks?.response?.pagination?.pages > 1 && (
            <Paginator
              page={page}
              count={tanks?.response?.pagination?.pages}
              onChange={(page) => setPage(page)}
            />
          )}
        </>
      )}
    </WotOverlay>
  );
}
