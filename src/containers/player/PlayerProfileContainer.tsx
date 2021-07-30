import { useAppDispatch, useAppSelector } from "app/hooks";
import PlayerDetails from "components/wot/player/PlayerDetails";
import playerName from "helpers/playerName";
import WotOverlay from "overlays/WotOverlay";
import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { searchPlayerById, selectSearchPlayer } from "reducers/wotSlice";

interface MatchParams {
  account_id: string;
}

export default function PlayerProfileContainer({ ...props }) {
  let { account_id }: MatchParams = useParams();
  const dispatch = useAppDispatch();
  const player_data = useAppSelector(selectSearchPlayer);

  useEffect(() => {
    dispatch<any>(searchPlayerById({ account_id }));
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
