import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

const List = styled.div`
  position: relative;
  z-index: 2;
  color: white;
`;

const Item = styled.div`
  background: #1c1c1c;
  display: flex;
  width: 100%;
  margin: 5px 0;
  padding: 5px;
  flex-wrap: wrap;

  ${props => props?.header && `background: ${COLOR_THEME}; color: white; font-weight: 900;`}
`;

const Name = styled.div`
  font-size: 15px;
  flex: 2;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`;

const Small = styled(Name)`
  flex: 1;
  white-space: nowrap;
`;

const TankImage = styled.img`
  max-width: 50px;
  transition: transform .2s ease-in-out;
  
  &:hover {
    transform: scale(3);
  }
`;

export default function ExpWn8List({ exp_wn8 = [] }) {
  exp_wn8 = Object.values(exp_wn8);
  if (!exp_wn8?.length) {
    return null;
  }

  return (
    <List>
      <Item header>
        <Name><FormattedMessage id={`tank.name`} /></Name>
        <Small><FormattedMessage id={`image`} /></Small>
        <Small><FormattedMessage id={`nation`} /></Small>
        <Small><FormattedMessage id={`tier`} /></Small>
        <Small><FormattedMessage id={`tank.type`} /></Small>
        <Small><FormattedMessage id={`exp.damage`} /></Small>
        <Small><FormattedMessage id={`exp.def`} /></Small>
        <Small><FormattedMessage id={`exp.frag`} /></Small>
        <Small><FormattedMessage id={`exp.spot`} /></Small>
        <Small><FormattedMessage id={`exp.win`} /></Small>
      </Item>

      {exp_wn8.map((tank, key) => (
        <Item key={`tank-${key}`}>
          <Name>{tank.name}</Name>
          <Small><TankImage src={tank?.image} /></Small>
          <Small>{tank.nation}</Small>
          <Small>{tank.tier}</Small>
          <Small>{tank.type}</Small>
          <Small title={tank.damage}>{priceFormat(tank.damage, ',', '', 4)}</Small>
          <Small title={tank.def}>{priceFormat(tank.def, ',', '', 4)}</Small>
          <Small title={tank.frag}>{priceFormat(tank.frag, ',', '', 4)}</Small>
          <Small title={tank.spot}>{priceFormat(tank.spot, ',', '', 4)}</Small>
          <Small title={tank.win}>{priceFormat(tank.win, ',', '', 4)}</Small>
        </Item>
      ))}
    </List>
  );
}