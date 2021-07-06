import { Grid } from "@material-ui/core";
import FormatClearRoundedIcon from '@material-ui/icons/FormatClearRounded';
import ButtonInput from "components/ui/input/ButtonInput";
import TextInput from "components/ui/input/TextInput";
import Paginator from "components/ui/Paginator";
import ExpectedFullList from "components/wot/expected/ExpectedFullList";
import ThanksBox from "components/wot/ThanksBox";
import WotOverlay from "overlays/Wot";
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { expWn8List, selectExpWn8List } from "reducers/wotSlice";
import { Header } from "styles/GlobalStyled";

export default function ExpMoeContainer({ ...props }) {
  const dispatch = useDispatch();
  const exp_wn8 = useSelector(selectExpWn8List);
  const response = exp_wn8?.response;
  const [page, setPage] = useState(1);
  const [tank, setTank] = useState('');

  const search = (page_no, name) => {
    setPage(page_no);
    setTank(name);

    dispatch(expWn8List({ page: page_no, tank_name: name }));
  }

  const clear = () => {
    setPage(1);
    search(1, '');
  }

  useEffect(() => {
    search(page, tank);
  }, [dispatch, page]);

  return (
    <WotOverlay {...props}>
      {response && (
        <>
          <Header up>
            <FormattedMessage id={`last.update`} />
            <small><FormattedMessage id={`version`} />: {response?.update?.version}</small>
          </Header>

          <form onSubmit={(event) => {
            event.preventDefault();
            search(1, tank);
          }}>
            <Grid container spacing={2}>
              <Grid item sm xs={12}>
                <TextInput
                  required
                  onChange={(value) => setTank(value)}
                  value={tank}
                  variant={`standard`}
                  prefix_icon={<FormatClearRoundedIcon onClick={clear} style={{ cursor: 'pointer' }} />}
                />
              </Grid>

              <Grid item sm xs={12}>
                <ButtonInput label={`search.tank`} large />
              </Grid>
            </Grid>
          </form>

          <ThanksBox>
            Expected values and MoE values are provided by wotclans.com.br - visit his
            <a href={`https://wotclans.com.br`} target={`_blank`} rel={`nofollow`}>website</a>
          </ThanksBox>

          <ExpectedFullList exp_wn8={response?.data} />

          {response?.pagination?.pages > 1 && (
            <Paginator
              page={page}
              count={response?.pagination?.pages}
              onChange={(page) => setPage(page)}
            />
          )}
        </>
      )}
    </WotOverlay>
  );
}
