import { priceFormat } from "helpers/priceFormat";
import React from "react";
import styled from "styled-components";
import { COLOR_PRICE_GOLD, COLOR_PRICE_SILVER, COLOR_PRICE_XP, COLOR_THEME, RADIUS } from "styles/colors";

const PriceBox = styled.div`
  display: inline-flex;
  line-height: 1;
  font-size: 12px;
  border-bottom-left-radius: ${RADIUS};
  border-top-right-radius: ${RADIUS};
  overflow: hidden; 
`;

const Price = styled.div`
  padding: 5px;
  background: ${props => props?.color};
`;

export default function TankPriceBox({ tank = {}, ...props }) {
  return (
    <PriceBox {...props}>
      {tank?.price_credit > 0 && (
        <Price color={COLOR_PRICE_SILVER}>{priceFormat(tank.price_credit, ',', 'S')}</Price>
      )}
      {tank?.price_gold > 0 && (
        <Price color={COLOR_PRICE_GOLD}>{priceFormat(tank.price_gold, ',', 'G')}</Price>
      )}
      {tank?.prices_xp > 0 && (
        <Price color={COLOR_PRICE_XP}>{priceFormat(tank.prices_xp, ',', 'S')}</Price>
      )}
    </PriceBox>
  );
}