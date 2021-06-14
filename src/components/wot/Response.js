import React from 'react';
import styled from "styled-components";
import { COLOR_BLUE } from "styles/colors";

const ResponseBox = styled.div`
  background: ${COLOR_BLUE};
  color: white;
  border-radius: 10px;
  padding: 25px;
  margin: 25px 0;
  text-align: left;

  ol, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default function Response({ children }) {
  return (
    <ResponseBox>{children}</ResponseBox>
  );
}