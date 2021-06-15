import CardDetailsDialog from "components/ui/dialog/CardDetailsDialog";
import TankCard from "components/wot/tanks/TankCard";
import TankPriceBox from "components/wot/tanks/TankPriceBox";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { priceFormat } from "helpers/priceFormat";
import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_THEME, RADIUS } from "styles/colors";

const TankItem = styled.div`
  background: #cccccc;
  border-radius: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
  ${props => props?.pointer && `cursor: pointer;`};
  ${props => props?.premium && `
      background: #ffcf40;
      background: linear-gradient(to right,#bf953f,#fcf6ba);
  `};

  &:hover {
    transform: scale(1.02);
    z-index: 20;
  }
`;

const TankName = styled.div`
  text-align: center;
  position: absolute;
  line-height: 1;
  font-weight: 700;
  background: rgba(33, 150, 243, .8);
  transition: all 0.3s ease-in-out;
  opacity: ${props => props?.hover ? 1 : 1};
  color: white;
  bottom: -5px;
  right: -5px;
  padding: 5px;
  border-radius: ${RADIUS};
`;

const TankImage = styled.div`
  width: 100%;
  height: 150px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: contain;
`;

const Wn8 = styled.div`
  display: inline-flex;
  position: absolute;
  top: -5px;
  left: -5px;
`;

const Weight = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background: ${COLOR_THEME};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props?.hover ? 0.5 : 1};
  transition: all .3s ease-in-out;
`;

export default function Tank({ tank = {}, stats = {}, statistics = {}, ...props }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {!props?.no_stats && (
        <CardDetailsDialog open={open} handleClose={() => setOpen(false)}>
          <TankCard
            tank={tank}
            statistics={statistics}
            stats={stats}
          />
        </CardDetailsDialog>
      )}

      <TankItem
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
        premium={tank?.is_premium || false}
        pointer={!props?.no_stats}
      >
        {props?.weight && (
          <Weight hover={hover}>{priceFormat(stats?.weight, ',', '%')}</Weight>
        )}

        <TankName hover={hover}>{tank?.name}</TankName>
        <TankImage image={tank?.image} />

        {!props?.no_wn8 && (
          <Wn8 title={stats?.weight}>
            <Wn8Bar value={stats?.wn8} unit={`WN8`} />
          </Wn8>
        )}

        {props?.price && (
          <TankPriceBox tank={tank} />
        )}
      </TankItem>
    </>
  );
}