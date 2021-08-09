import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${breakpoint.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoint.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Item = styled.div`
  height: 500px;
`;

type CharsListTYpe = {
  list: string[]
}

function CharsList({ list = [] }: CharsListTYpe) {
  return (
    <List>
      {list.map((char, key) => (
        <Item key={`char-${key}`}>
          {char}
        </Item>
      ))}
    </List>
  );
}

CharsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default CharsList;
