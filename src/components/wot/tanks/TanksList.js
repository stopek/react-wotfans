import Tank from "components/wot/Tank";
import React from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Tanks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin: 15px 0;

  @media ${breakpoint.sm} {
    grid-template-columns: 1fr 1fr;
  }
  
  @media ${breakpoint.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function TanksList({ tanks = [], tier = '', ...props }) {
  return (
    <Tanks>
      {tanks.filter((tank) => (tier !== '' ? tank?.tier === tier : true)).map((tank) => (
        <Tank tank={tank} key={`tank-${tank.id}`} {...props} />
      ))}
    </Tanks>
  );
}