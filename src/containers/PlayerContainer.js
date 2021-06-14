import PlayerDetails from "components/wot/player/PlayerDetails";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPlayerById, selectSearchPlayer } from "reducers/wotSlice";

function PlayerContainer(match, ...props) {
  let { account_id } = useParams();
  const dispatch = useDispatch();
  const player_data = useSelector(selectSearchPlayer);

  useEffect(() => {
    dispatch(searchPlayerById({ account_id }));
  }, [account_id, dispatch]);

  return (
    <WotOverlay {...props}>
      {player_data?.response && (
        <PlayerDetails
          player={player_data?.response?.player}
          statistics={player_data?.response?.statistics}
        />
      )}
    </WotOverlay>
  );
}

export default PlayerContainer;