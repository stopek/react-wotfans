import ButtonInput from "components/ui/input/ButtonInput";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserTanks, userTanks } from "reducers/wotSlice";


export default function TanksLoadAndFilter({ account_id = 0 }) {
  const dispatch = useDispatch();
  const user_tanks = useSelector(selectUserTanks);

  const tanks = user_tanks?.response?.tanks || {};

  const handleLoadTanks = (id) => {
    dispatch(userTanks({
      account_id: id
    }));
  }

  return (
    <>
      <ButtonInput
        onClick={() => handleLoadTanks(account_id)}
        label={`Wczytaj czołgi`}
        large
      />

      <TanksListAndFilters tanks={tanks} />
    </>
  )
}