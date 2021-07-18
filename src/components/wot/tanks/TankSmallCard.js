import TankNationBox from "components/wot/tanks/components/TankNationBox";
import TankPriceBox from "components/wot/tanks/components/TankPriceBox";
import TankNameWithIconType from "components/wot/tanks/TankNameWithIconType";
import TankProfileButton from "components/wot/tanks/TankProfileButton";
import React from "react";
import styled from "styled-components";
import { COLOR_DARK_2 } from "styles/colors";

const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;

const ImageBackground = styled.div`
  display: block;
  z-index: 0;
  background-color: ${COLOR_DARK_2};
  ${props => props?.premium && `
      background: #ffcf40;
      background: linear-gradient(to right,#bf953f,#fcf6ba);
  `};
`;

const Image = styled.div`
  width: 250px;
  min-height: 150px;
  background-size: contain;
  display: flex;
  background-image: url(${props => props?.image});
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
`;

const Details = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 15px 0;
  justify-content: center;
  align-items: flex-start;
`;

export default function TankSmallCard({ tank = {} }) {
  return (
    <Card>
      <ImageBackground premium={tank?.is_premium || false}>
        <Image image={tank?.image} />
      </ImageBackground>
      <Details>
        <TankNameWithIconType tank={tank} />
        <TankNationBox tank={tank} />
        <TankPriceBox tank={tank} />
        <TankProfileButton tank_id={tank?.id} small />
      </Details>
    </Card>
  );
}
