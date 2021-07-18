import MoeTanksFIlteredList from "components/wot/moe/MoeTanksFIlteredList";
import ThanksBox from "components/wot/ThanksBox";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { moeList, selectMoeList } from "reducers/wotSlice";
import { Header } from "styles/GlobalStyled";

export default function MoeContainer({ ...props }) {
  const dispatch = useDispatch();
  const exp_wn8 = useSelector(selectMoeList);
  const response = exp_wn8?.response;

  useEffect(() => dispatch(moeList()), [dispatch]);

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

          <MoeTanksFIlteredList tanks={response?.tanks} />
        </>
      )}
    </WotOverlay>
  );
}
