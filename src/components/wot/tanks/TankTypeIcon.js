import icon_artillery from "assets/icons/types/type_artillery.png";
import icon_heavy from "assets/icons/types/type_heavy.png";
import icon_light from "assets/icons/types/type_light.png";
import icon_medium from "assets/icons/types/type_medium.png";

import icon_td from "assets/icons/types/type_td.png";
import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  width: 30px;
  height: 30px;
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

export default function TankTypeIcon({ type = '', ...props }) {
  return (
    <Icon image={getIconByType(type)} {...props} />
  );
}