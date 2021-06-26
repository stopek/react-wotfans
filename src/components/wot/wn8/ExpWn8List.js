import { TANK_URL } from "app/routes";
import ButtonInput from "components/ui/input/ButtonInput";
import fillRoute from "helpers/fillRoute";
import { priceFormat } from "helpers/priceFormat";
import { getTranslationByNation } from "helpers/user";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
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

const getTranslationByTankType = (type) => {
  switch (type) {
    case 'mediumTank':
      return 'type.mediumTank';
    case 'heavyTank':
      return 'type.heavyTank';
    case 'lightTank':
      return 'type.lightTank';
    case 'AT-SPG':
      return 'type.td';
    case 'SPG':
      return 'type.artillery';
    default:
      return type;
  }
}

export default function ExpWn8List({ exp_wn8 = [] }) {
  const history = useHistory();

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
        <Small><FormattedMessage id={`exp.win`} /></Small>
        <Small><FormattedMessage id={`see.profile`} /></Small>
      </Item>

      {exp_wn8.map((tank, key) => (
        <Item key={`tank-${key}`}>
          <Name>{tank.tank.name}</Name>
          <Small><TankImage src={tank.tank.image} /></Small>
          <Small>
            <FormattedMessage id={getTranslationByNation(tank.tank.nation)} />
          </Small>
          <Small>{tank.tank.tier}</Small>
          <Small>
            <FormattedMessage id={getTranslationByTankType(tank.tank.type)} />
          </Small>
          <Small title={tank?.damage}>{priceFormat(tank?.damage, ',', '', 4)}</Small>
          <Small title={tank?.def}>{priceFormat(tank?.def, ',', '', 4)}</Small>
          <Small title={tank?.frag}>{priceFormat(tank?.frag, ',', '', 4)}</Small>
          <Small title={tank?.spot}>{priceFormat(tank?.spot, ',', '', 4)}</Small>
          <Small title={tank?.win}>{priceFormat(tank?.win, ',', '', 4)}</Small>
          <Small>
            <ButtonInput
              color={`secondary`}
              label={`see.profile`}
              onClick={() => history.push(fillRoute(TANK_URL, { tank_id: tank?.tank?.id }))}
            />
          </Small>
        </Item>
      ))}
    </List>
  );
}
