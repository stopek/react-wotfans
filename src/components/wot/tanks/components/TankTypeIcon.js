import icon_artillery from "assets/icons/types/type_artillery.png";
import icon_heavy from "assets/icons/types/type_heavy.png";
import icon_light from "assets/icons/types/type_light.png";
import icon_medium from "assets/icons/types/type_medium.png";
import icon_td from "assets/icons/types/type_td.png";
import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  width: ${props => props?.size}px;
  height: ${props => props?.size}px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: contain;
  ${props => props?.dark && `filter: brightness(-150%);`}
`;

const getIconByType = (type) => {
  switch (type) {
    case 'mediumTank':
      return icon_medium;
    case 'heavyTank':
      return icon_heavy;
    case 'SPG':
      return icon_artillery;
    case 'AT-SPG':
      return icon_td;
    default:
      return icon_light;
  }
}

export default function TankTypeIcon({ type = '', size = 30, ...props }) {
  return (
    <Icon size={size} image={getIconByType(type)} {...props} />
  );
}
