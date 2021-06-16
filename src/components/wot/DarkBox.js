import React from 'react';
import styled from "styled-components";
import { COLOR_DARK } from "styles/colors";

const Box = styled.div`
  background: ${COLOR_DARK};
  padding: 10px;
  margin: 10px 0;
`;

export default function DarkBox({ children }) {
  return (
    <Box>
      {children}
    </Box>
  );
}