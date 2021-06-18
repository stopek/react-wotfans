import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import StatBox from "components/wot/StatBox";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_SECOND, RADIUS } from "styles/colors";

const Card = styled.div`
  background: ${COLOR_SECOND};
  color: white;
  padding: 25px;
  font-weight: 700;
  font-size: 30px;
  max-width: 500px;
  border-radius: ${RADIUS};
`;

const Text = styled.div`
  display: block;
  font-size: 15px;
`;

const Details = styled.div`
  font-size: 20px;
`;

export default function LoggedUserCard({ user = {} }) {
  return (
    <Card>
      <PlayerNameWithConsoleLogo name={user?.user?.player?.name} />
      <Details>
        <FormattedMessage id={`your.clan`} />: {user?.user?.player?.clan?.name}
      </Details>

      <Text>
        Ostatnia bitwa: {date_from_unix(user?.user?.player?.last_battle_time, 'yyyy-MM-dd HH:mm')}
      </Text>
      <hr />

      <StatBox
        value={
          <Wn8Bar value={user?.statistics} />
        }
        translation={`wn8`}
      />
    </Card>
  );
}