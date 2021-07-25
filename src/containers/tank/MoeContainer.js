import UnderlineHeader from "components/wot/headers/UnderlineHeader";
import MoeTanksFilteredList from "components/wot/moe/MoeTanksFilteredList";
import ThanksBox from "components/wot/ThanksBox";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { moeList, selectMoeList } from "reducers/wotSlice";

export default function MoeContainer({ ...props }) {
  const dispatch = useDispatch();
  const exp_wn8 = useSelector(selectMoeList);
  const response = exp_wn8?.response;

  useEffect(() => dispatch(moeList()), [dispatch]);

  return (
    <WotOverlay {...props}>
      {response && (
        <>
          <UnderlineHeader
            translation={`seo.moe`}
            small={`version`}
            values={{ version: response?.update?.version }}
            up
          />

          <ThanksBox>
            Expected values and MoE values are provided by wotclans.com.br - visit his
            <a href={`https://wotclans.com.br`} target={`_blank`} rel={`nofollow`}>website</a>
          </ThanksBox>

          <MoeTanksFilteredList tanks={response?.tanks} />
        </>
      )}
    </WotOverlay>
  );
}
