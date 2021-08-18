import { TANK_URL } from "app/routes";
import TankTypeIcon from "components/wot/tanks/components/TankTypeIcon";
import fillRoute from "helpers/fillRoute";
import { TankInterface } from "interfaces/TankInterface";
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

type TankNameWithIconTypeType = {
  tank: TankInterface
}

export default function TankNameWithIconType({ tank }: TankNameWithIconTypeType) {
  const history = useHistory();
  const url = fillRoute(TANK_URL, { tank_id: tank?.id });

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    return history.push(url);
  }

  return (
    <Content onClick={handleClick} href={url}>
      <TankTypeIcon type={tank?.type} size={20} />
      {tank?.name}
    </Content>
  );
}
