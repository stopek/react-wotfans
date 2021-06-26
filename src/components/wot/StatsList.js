import StatBox from "components/wot/StatBox";
import React from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 15px 0;
  gap: 15px;

  @media ${breakpoint.md} {
    grid-template-columns: 1fr 1fr;
  }
  
  @media ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media ${breakpoint.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function StatsList({ list = [] }) {
  return (
    <Stats>
      {Object.values(list).map((stat, stat_no) => (
        <StatBox
          value={stat.value}
          translation={stat.translation}
          tank={stat?.tank}
          button={stat?.button}
          key={stat_no}
        />
      ))}
    </Stats>
  );
}
