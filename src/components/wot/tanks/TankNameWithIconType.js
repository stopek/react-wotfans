import { TANK_URL } from "app/routes";
import TankTypeIcon from "components/wot/tanks/components/TankTypeIcon";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Content = styled.a`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

export default function TankNameWithIconType({ tank = {} }) {
  const history = useHistory();
  const url = fillRoute(TANK_URL, { tank_id: tank?.id });

  const handleClick = (event) => {
    event.preventDefault();
    return history.push(url);
  }

  return (
    <Content onClick={handleClick} href={url}>
      <TankTypeIcon type={tank?.type} />
      {tank?.name}
    </Content>
  );
}
