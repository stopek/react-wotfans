import icon_artillery from "assets/icons/types/type_artillery.png";
import icon_heavy from "assets/icons/types/type_heavy.png";
import icon_light from "assets/icons/types/type_light.png";
import icon_medium from "assets/icons/types/type_medium.png";
import icon_td from "assets/icons/types/type_td.png";
import PropTypes from 'prop-types';
import React from "react";
import styled from "styled-components";

const Icon = styled.div<{ size: number, image: string, dark?: boolean }>`
  width: ${props => props?.size}px;
  height: ${props => props?.size}px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: contain;
  ${props => props?.dark && `filter: brightness(-150%);`}
`;

const getIconByTankType = (type: string) => {
  return {
    'mediumTank': icon_medium,
    'heavyTank': icon_heavy,
    'SPG': icon_artillery,
    'AT-SPG': icon_td
  }[type] ?? icon_light;
}

type TankTypeIconType = {
  type: string,
  size: number
}

const TankTypeIcon: React.FC<TankTypeIconType> = ({ type, size, ...props }: TankTypeIconType) => {
  return (
    <Icon
      size={size}
      image={getIconByTankType(type)}
      {...props}
    />
  );
}

TankTypeIcon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

TankTypeIcon.defaultProps = {
  size: 20
}

export default TankTypeIcon;
