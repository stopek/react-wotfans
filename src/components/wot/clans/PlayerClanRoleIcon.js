import React, { useState } from "react";
import styled from "styled-components";
import {
  COLOR_ROLE_COMMANDER,
  COLOR_ROLE_EXECUTIVE_OFFICER,
  COLOR_ROLE_PRIVATE,
  COLOR_ROLE_RECRUITMENT_OFFICER,
  RADIUS
} from "styles/colors";

const Role = styled.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin: 0 5px;
  z-index: 10;
`;

const RoleFullName = styled.div`
  position: absolute;
  opacity: 0;
  left: 0;
  transition: all .3s ease-in-out;
  background: ${props => props?.color};
  ${props => props?.hover && 'opacity: 1; left: 95%;'}
  font-size: 12px;
  padding: 2px 10px;
  border-top-right-radius: ${RADIUS};
  border-bottom-right-radius: ${RADIUS};
  z-index: 0;
  line-height: 1;
`;

const Letter = styled.div`
  position: relative;
  z-index: 2;
  background: ${props => props?.color};
  border-radius: ${RADIUS};
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  cursor: help;
  display: flex;
`;


const getRoleColor = (role_name) => {
  switch (role_name) {
    case 'c':
      return COLOR_ROLE_COMMANDER;
    case 'p':
      return COLOR_ROLE_PRIVATE;
    case 'e':
      return COLOR_ROLE_EXECUTIVE_OFFICER;
    case 'r':
      return COLOR_ROLE_RECRUITMENT_OFFICER;
    default:
      return 'transparent';
  }
}

export default function PlayerClanRoleIcon({ role_name = '' }) {
  const [hover, setHover] = useState(false);

  const role_letter = role_name[0] || '?';
  const color = getRoleColor(role_letter);

  return (
    <Role>
      <Letter
        color={color}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >{role_letter}</Letter>
      <RoleFullName
        hover={hover}
        color={color}
      >
        {role_name}
      </RoleFullName>
    </Role>
  );
}
