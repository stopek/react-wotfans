import TankTypeIcon from "components/wot/tanks/components/TankTypeIcon";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  font-size: inherit;
  color: inherit;
`;

export default function TankNameWithIconType({ tank = {} }) {
  return (
    <Content>
      <TankTypeIcon type={tank?.type} size={20} />
      {tank?.name}
    </Content>
  );
}
