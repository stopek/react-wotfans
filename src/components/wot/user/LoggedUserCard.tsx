import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import { useAppSelector } from "app/hooks";
import EfficiencyBar from "components/wot/efficiency/EfficiencyBar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_api, date_from_unix } from "helpers/date";
import { getDateLocale } from "helpers/languages";
import React from "react";
import { FormattedMessage } from "react-intl";
import { selectedLanguage } from "reducers/languageSlice";
import { selectUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK_2, COLOR_TEXT, COLOR_TEXT_DARK, RADIUS } from "styles/colors";

const Card = styled.div`
  background: ${COLOR_DARK_2};
  color: ${COLOR_TEXT};
  padding: 25px;
  font-weight: 700;
  font-size: 30px;
  border-radius: ${RADIUS};
  margin-bottom: 15px;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  flex-direction: column;
  border-bottom: 1px solid ${COLOR_TEXT_DARK};
  margin-bottom: 10px;
  padding-bottom: 10px;

  > div {
    display: flex;
    gap: 5px;
  }
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

export default function LoggedUserCard() {
  const user = useAppSelector(selectUser);
  const language = useAppSelector(selectedLanguage);
  const player = user?.response?.player;
  const statistics = user?.response?.statistics;

  return (
    <Card>
      <PlayerNameWithConsoleLogo name={player?.name} />
      {!!player?.clan?.name && (
        <Details>
          <FormattedMessage id={`your.clan`} />: {player?.clan?.name}
        </Details>
      )}

      <Text>
        {!!player?.last_battle_time && (
          <div>
            <span><FormattedMessage id={`last.battle.time`} />:</span>
            <strong>{date_from_unix(player?.last_battle_time, 'yyyy-MM-dd HH:mm')}</strong>
            {player?.is_locked && (
              <span><LoopRoundedIcon /></span>
            )}
          </div>
        )}

        {!!player?.updated_at && (
          <div>
            <span><FormattedMessage id={`last.update`} />:</span>
            <strong>
              {date_from_api(player?.updated_at, 'do MMM, HH:mm', 'yyyy-MM-dd HH:mm:ss', {
                  locale: getDateLocale(language)
                }
              )}
            </strong>
          </div>
        )}
      </Text>

      <StatisticsBar>
        <Wn8Bar value={statistics?.wn8} unit={`WN8`} />
        <WN7Bar value={statistics?.wn7} unit={`WN7`} />
        <EfficiencyBar value={statistics?.efficiency} unit={`EFFI`} />
      </StatisticsBar>
    </Card>
  );
}
