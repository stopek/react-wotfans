import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import EfficiencyBar from "components/wot/efficiency/EfficiencyBar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_DARK, RADIUS } from "styles/colors";

const Card = styled.div`
  background: ${COLOR_DARK};
  color: white;
  padding: 25px;
  font-weight: 700;
  font-size: 30px;
  border-radius: ${RADIUS};
  margin-bottom: 15px;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
`;

const Details = styled.div`
  font-size: 20px;
`;

const StatisticsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  > span {
    flex: 1;
  }
`;

export default function LoggedUserCard({ user = {} }) {
  const player = user?.user?.player;
  const statistics = user?.statistics;

  return (
    <Card>
      <PlayerNameWithConsoleLogo name={player?.name} />
      <Details>
        <FormattedMessage id={`your.clan`} />: {player?.clan?.name}
      </Details>

      <Text>
        <FormattedMessage
          id={`last.battle.time`} />: {date_from_unix(player?.last_battle_time, 'yyyy-MM-dd HH:mm')}{` `}
        {player?.is_locked && player?.updates === -1 && (
          <LoopRoundedIcon />
        )}
      </Text>

      <hr />

      <StatisticsBar>
        <Wn8Bar value={statistics?.wn8} unit={`WN8`} />
        <WN7Bar value={statistics?.wn7} unit={`WN7`} />
        <EfficiencyBar value={statistics?.efficiency} unit={`EFFI`} />
      </StatisticsBar>
    </Card>
  );
}
