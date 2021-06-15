import ExpWn8List from "components/wot/wn8/ExpWn8List";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { expWn8List, selectExpWn8List } from "reducers/wotSlice";
import { Header } from "styles/GlobalStyled";

export default function ExpWn8Container({ ...props }) {
  const dispatch = useDispatch();
  const exp_wn8 = useSelector(selectExpWn8List);
  const response = exp_wn8?.response;

  useEffect(() => {
    dispatch(expWn8List());
  }, [dispatch]);

  return (
    <WotOverlay {...props}>
      {response && (
        <>
          <Header up>
            <FormattedMessage id={`last.update`} />
            <small><FormattedMessage id={`version`} />: {response?.version}</small>
          </Header>

          <ExpWn8List exp_wn8={response?.expTanks} />
        </>
      )}
    </WotOverlay>
  );
}