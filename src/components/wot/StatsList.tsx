import StatBox from "components/wot/StatBox";
import { StatBoxInterface } from "interfaces/StatBoxInterface";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 15px 0;
  gap: 15px;

  @media ${breakpoint.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoint.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${breakpoint.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

type StatBoxType = {
  list: StatBoxInterface[]
}

function StatsList({ list }: StatBoxType) {
  return (
    <Stats>
      {list.map((stat, key) => (
        <StatBox
          key={`stat-box-item-${key}`}
          value={stat.value}
          translation={stat.translation}
          tank={stat?.tank}
          button={stat?.button}
        />
      ))}
    </Stats>
  );
}

StatsList.propTypes = {
  list: PropTypes.array
}

export default StatsList;
