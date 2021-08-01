import { Grid } from "@material-ui/core";
import { PLAYER_URL } from "app/routes";
import EfficiencyBar from "components/wot/efficiency/EfficiencyBar";
import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import WN7Bar from "components/wot/wn7/WN7Bar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import fillRoute from "helpers/fillRoute";
import { percentageCalculator, percentageDisplay } from "helpers/priceFormat";
import { PlayerInterface } from "interfaces/PlayerInterface";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_TEXT, COLOR_TEXT_ON_THEME, COLOR_THEME } from "styles/colors";

const Content = styled.div`
  width: 100%;
  padding: 5px 5px;
  cursor: pointer;
  color: ${COLOR_TEXT};

  &:hover {
    background: ${COLOR_THEME};
    color: ${COLOR_TEXT_ON_THEME};
  }
`;

const NameWithStatistics = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  flex-wrap: wrap;
`;

const DetailsList = styled.ul`
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Detail = styled.li`
  display: flex;

  span, strong {
    flex: 1;
  }

  strong {
    text-align: right;
  }
`;

const StatsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  flex-wrap: wrap;
  flex: 1;
`;

interface PlayerSmallCardInterface extends React.HTMLAttributes<HTMLDivElement> {
  player: PlayerInterface;
}

function PlayerSmallCard ({ player, ...rest }: PlayerSmallCardInterface) {
  const statistics = player.stats[0] ?? {};
  const accuracyPercentage = percentageCalculator(statistics?.hits, statistics?.shots);
  const winPercentage = percentageCalculator(statistics?.wins, statistics?.battles);
  const history = useHistory();

  const redirect = () => {
    return history.push(fillRoute(PLAYER_URL, { account_id: player?.id, name: player?.name }))
  }

  return (
    <Content onClick={redirect} {...rest}>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          <NameWithStatistics>
            <PlayerNameWithConsoleLogo
              name={player?.name}
              last_battle={player?.last_battle_time}
            />
            <StatsBox>
              <Wn8Bar value={player?.wn8 || 0} small unit={`WN8`} />
              <WN7Bar value={player?.wn7 || 0} small unit={`WN7`} />
              <EfficiencyBar value={player?.efficiency || 0} small unit={`EFFI`} />
            </StatsBox>
          </NameWithStatistics>
        </Grid>

        <Grid item sm={6} xs={12}>
          <DetailsList>
            <Detail>
              <span><FormattedMessage id={`battles`} /></span>
              <strong>{statistics?.battles}</strong>
            </Detail>

            <Detail>
              <span><FormattedMessage id={`accuracy.percentage`} /></span>
              <strong>{percentageDisplay(accuracyPercentage)}</strong>
            </Detail>
            <Detail>
              <span><FormattedMessage id={`win.percentage`} /></span>
              <strong>{percentageDisplay(winPercentage)}</strong>
            </Detail>

          </DetailsList>
        </Grid>
      </Grid>
    </Content>
  );
}

PlayerSmallCard.propTypes = {
  player: PropTypes.object.isRequired
}

export default PlayerSmallCard;
