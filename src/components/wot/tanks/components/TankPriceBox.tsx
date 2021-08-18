import { priceFormat } from "helpers/priceFormat";
import { TankInterface } from "interfaces/TankInterface";
import React from "react";
import styled from "styled-components";
import { COLOR_DARK, COLOR_PRICE_GOLD, COLOR_PRICE_SILVER, COLOR_PRICE_XP, RADIUS } from "styles/colors";

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
  color: ${COLOR_DARK};
  background: ${props => props?.color};
`;

type TankPriceBoxType = {
  tank: TankInterface
}

const TankPriceBox: React.FC<TankPriceBoxType> = ({ tank, ...props }) => {
  return (
    <PriceBox {...props}>
      {tank?.price_credit > 0 && (
        <Price color={COLOR_PRICE_SILVER}>{priceFormat(tank.price_credit, ',', 'S', 0)}</Price>
      )}

      {tank?.price_gold > 0 && (
        <Price color={COLOR_PRICE_GOLD}>{priceFormat(tank.price_gold, ',', 'G', 0)}</Price>
      )}

      {tank?.prices_xp > 0 && (
        <Price color={COLOR_PRICE_XP}>{priceFormat(tank.prices_xp, ',', 'S', 0)}</Price>
      )}
    </PriceBox>
  );
}

//@todo - wrocić do typowania
// TankPriceBox.propTypes = {
//   tank: PropTypes.shape({
//     price_credit: PropTypes.number.isRequired,
//     price_gold: PropTypes.number.isRequired,
//     prices_xp: PropTypes.number.isRequired
//   })
// }

export default TankPriceBox;
