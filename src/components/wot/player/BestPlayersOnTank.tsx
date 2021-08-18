import TableUI from "components/ui/TableUI";
import ClanProfileButton from "components/wot/clans/ClanProfileButton";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import PlayerProfileButton from "components/wot/player/PlayerProfileButton";
import { MaxOnTankInterface } from "interfaces/MaxOnTankInterface";
import React from "react";

type BestPlayerOnTank = {
  stats: MaxOnTankInterface[],
  column_key: string
}

function BestPlayersOnTank({ column_key, stats }: BestPlayerOnTank) {
  return (
    <TableUI
      headers={[
        { id: 'value' },
        { id: 'player', translation: 'player.name' },
        { id: 'profile', translation: 'see.profile' },
        { id: 'clan', translation: 'clan' },
        { id: 'clan.profile', translation: 'see.profile' },
      ]}
      nosort={['player', 'profile']}
      rowsPerPageOptions={[10, 15, 25]}
      items={stats as []}
      without_top
      parse={(item) => {
        return {
          value: item[column_key],
          player: <PlayerNameWithConsoleLogo name={item?.player?.name} small />,
          profile: <PlayerProfileButton account_id={item.player.id} name={item.player.name} small />,
          clan: !!item.player.clan && item.player.clan.tag,
          clan_profile: !!item.player.clan && <ClanProfileButton tag={item.player.clan.tag} small />
        }
      }}
    />
  );
}

export default BestPlayersOnTank;
