import { useAppDispatch, useAppSelector } from "app/hooks";
import PlayersList from "components/wot/player/PlayersList";
import SearchPlayerForm from "components/wot/player/SearchPlayerForm";
import SimplePagination from "components/wot/SimplePagination";
import { SearchPlayerFormInterface } from "interfaces/form/SearchPlayerFormInterface";
import { PlayerInterface } from "interfaces/PlayerInterface";
import WotOverlay from "overlays/WotOverlay";
import React, { useEffect, useState } from 'react';
import { clearSearchPlayer, clearSearchPlayers, searchPlayer, selectSearchPlayers } from "reducers/wotSlice";

export default function SearchPlayerContainer({ ...props }) {
  const dispatch = useAppDispatch();
  const players = useAppSelector(selectSearchPlayers);
  const [page, setPage] = useState(1);
  const [post_data, setPostData] = useState<SearchPlayerFormInterface>();
  const isMorePages = !!players?.response?.pagination?.pages || false;

  useEffect(() => dispatch<any>(clearSearchPlayers()), [dispatch]);

  const search = (data: SearchPlayerFormInterface) => {
    if (!data.player_name.length) {
      return;
    }

    dispatch<any>(searchPlayer(data));
  }

  useEffect(() => {
    dispatch(clearSearchPlayer());
  }, [dispatch]);

  const handleSearchPlayer = (event: React.SyntheticEvent, data: SearchPlayerFormInterface) => {
    event.preventDefault();
    setPage(1);
    setPostData(data);

    search(data);
  }

  useEffect(() => {
    search(Object.assign({}, post_data, page))
  }, [dispatch, page]);

  let players_list: PlayerInterface[] = []
  if (players?.response) {
    const statistics = players?.response?.statistics;

    players_list = Object.values(players?.response?.data || []).map((player) => {
      return Object.assign({}, player, {
        wn8: statistics?.wn8[player.id] || -1,
        wn7: statistics?.wn7[player.id] || -1,
        efficiency: statistics?.efficiency[player.id] || -1
      });
    });
  }

  return (
    <WotOverlay {...props}>
      <>
        <SearchPlayerForm submit={handleSearchPlayer} />

        {isMorePages && (
          <SimplePagination
            page={page}
            setPage={setPage}
            pages={players?.response?.pagination?.pages || 0}
          />
        )}

        {players?.response && (
          <PlayersList players={players_list} />
        )}

        {isMorePages && (
          <SimplePagination
            page={page}
            setPage={setPage}
            pages={players?.response?.pagination?.pages || 0}
          />
        )}
      </>
    </WotOverlay>
  );
}
