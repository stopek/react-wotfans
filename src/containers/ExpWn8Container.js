import ExpWn8List from "components/wot/wn8/ExpWn8List";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { expWn8List, selectExpWn8List } from "reducers/wotSlice";
import { Header } from "styles/GlobalStyled";

function ExpWn8Container(...props) {
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
            Ostatnia aktualizacja
            <small>Wersja: {response?.version}</small>
          </Header>
          <ExpWn8List exp_wn8={response?.expTanks} />
        </>
      )}
    </WotOverlay>
  );
}

export default ExpWn8Container;