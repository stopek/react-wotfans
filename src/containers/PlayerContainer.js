import PlayerDetails from "components/wot/player/PlayerDetails";
import playerName from "helpers/playerName";
import WotOverlay from "overlays/Wot";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchPlayerById, selectSearchPlayer } from "reducers/wotSlice";

export default function PlayerContainer({ match, ...props }) {
  let { account_id } = useParams();
  const dispatch = useDispatch();
  const player_data = useSelector(selectSearchPlayer);

  useEffect(() => {
    dispatch(searchPlayerById({ account_id }));
  }, [account_id, dispatch]);

  let data = {};
  if (player_data?.response) {
    data = { seo_values: { name: playerName(player_data?.response?.player?.name) || '' }, ...props };
  }

  return (
    <WotOverlay {...data}>
      {player_data?.response && (
        <PlayerDetails
          player={player_data?.response?.player}
          statistics={player_data?.response?.statistics}
        />
      )}
    </WotOverlay>
  );
}
