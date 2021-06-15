import { Grid } from "@material-ui/core";
import { nationList, premiumFilter, tiersList, typeList } from "app/settings";
import SelectInput from "components/ui/input/SelectInput";
import Paginator from "components/ui/Paginator";
import TanksList from "components/wot/tanks/TanksList";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { loadTanks, selectTanks } from "reducers/wotSlice";

export default function TanksContainer({ ...props }) {
  const dispatch = useDispatch();
  const tanks = useSelector(selectTanks);
  const [page, setPage] = useState(1);
  const [tier, setTier] = useState('');
  const [nation, setNation] = useState('');
  const [type, setType] = useState('');
  const [premium, setPremium] = useState('');

  useEffect(() => {
    if (tanks?.pagination?.page !== page) {
      dispatch(loadTanks({ page, nation, tier, type, premium }));
    }
  }, [dispatch, page]);

  useEffect(() => {
    setPage(1);
    dispatch(loadTanks({ page: 1, nation, tier, type, premium }));
  }, [dispatch, tier, nation, type, premium]);

  return (
    <WotOverlay {...props}>
      {tanks?.response && (
        <>
          <Grid container spacing={2}>
            <Grid item md xs={12}>
              <SelectInput
                value={tier || null}
                variant={`standard`}
                label={<FormattedMessage id={`tier`} />}
                onChange={(value) => setTier(value)}
                options={[{ label: <FormattedMessage id={`all.items`} />, value: '' }].concat(tiersList)}
              />
            </Grid>
            <Grid item md xs={12}>
              <SelectInput
                value={nation || null}
                variant={`standard`}
                label={<FormattedMessage id={`nation`} />}
                onChange={(value) => setNation(value)}
                options={[{ label: <FormattedMessage id={`all.items`} />, value: '' }].concat(nationList)}
              />
            </Grid>
            <Grid item md xs={12}>
              <SelectInput
                value={type || null}
                variant={`standard`}
                label={<FormattedMessage id={`type`} />}
                onChange={(value) => setType(value)}
                options={[{ label: <FormattedMessage id={`all.items`} />, value: '' }].concat(typeList)}
              />
            </Grid>
            <Grid item md xs={12}>
              <SelectInput
                value={premium || null}
                variant={`standard`}
                label={<FormattedMessage id={`premium`} />}
                onChange={(value) => setPremium(value)}
                options={[{ label: <FormattedMessage id={`all.items`} />, value: '' }].concat(premiumFilter)}
              />
            </Grid>
            <Grid item xs={12} container alignItems={`center`} justify={`flex-end`}>
              <Paginator
                page={page}
                count={tanks?.response?.pagination?.pages}
                onChange={(page) => setPage(page)}
              />
            </Grid>
          </Grid>

          <TanksList
            tanks={tanks?.response?.data}
            no_wn8 price no_stats
          />
        </>
      )}
    </WotOverlay>
  );
}