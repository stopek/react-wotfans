import React from "react";
import styled from "styled-components";
import ps_logo from "assets/icons/ps_logo.png";
import xbox_logo from "assets/icons/xbox_logo.png";
import { RADIUS } from "styles/colors";

const Name = styled.span`
  display: inline-flex;
  gap: 10px;
  align-items: center;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: url(${props => props?.image}) no-repeat center center;
  background-size: cover;
  border-radius: ${RADIUS};
`;

const getConsoleLogo = (name) => {
  if (name === 'p') {
    return ps_logo;
  }

  return xbox_logo;
}

export default function PlayerNameWithConsoleLogo({ name = '' }) {
  if (!name) {
    return null;
  }

  const pattern = /(.*)([- ])([^- ]*$)/;

  const nick = name.replace(pattern,"$1");
  const platform = name.replace(pattern,"$3");

  return (
    <Name title={name}>
      <Logo image={getConsoleLogo(platform)} />
      <span>{nick}</span>
    </Name>
  );
}