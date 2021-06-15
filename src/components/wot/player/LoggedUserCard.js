import PlayerNameWithConsoleLogo from "components/wot/player/PlayerNameWithConsoleLogo";
import StatBox from "components/wot/StatBox";
import { priceFormat } from "helpers/priceFormat";
import React from "react";
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

const Details = styled.div`
  font-size: 20px;
`;

export default function LoggedUserCard({ user = {} }) {
  return (
    <>
      <Card>
        <PlayerNameWithConsoleLogo name={user?.user?.player?.name} />
        <Details>
          Twój klan: {user?.user?.player?.clan?.name}
        </Details>
        <hr />
        <StatBox value={priceFormat(user?.statistics, ',', '')} title={`WN8`} />
      </Card>
    </>
  );
}