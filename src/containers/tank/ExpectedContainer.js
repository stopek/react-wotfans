import ExpectedTanksFilteredList from "components/wot/expected/ExpectedTanksFilteredList";
import ThanksBox from "components/wot/ThanksBox";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { expWn8List, selectExpWn8List } from "reducers/wotSlice";
import { Header } from "styles/GlobalStyled";

export default function ExpectedContainer({ ...props }) {
  const dispatch = useDispatch();
  const exp_wn8 = useSelector(selectExpWn8List);
  const response = exp_wn8?.response;

  useEffect(() => dispatch(expWn8List()), [dispatch]);

  return (
    <WotOverlay {...props}>
      {response && (
        <>
          <Header up>
            <FormattedMessage id={`last.update`} />
            <small><FormattedMessage id={`version`} />: {response?.update?.version}</small>
          </Header>

          <ThanksBox>
            Expected values and MoE values are provided by wotclans.com.br - visit his
            <a href={`https://wotclans.com.br`} target={`_blank`} rel={`nofollow`}>website</a>
          </ThanksBox>

          <ExpectedTanksFilteredList tanks={response?.tanks} />
        </>
      )}
    </WotOverlay>
  );
}
