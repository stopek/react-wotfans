import React from "react";
import styled from "styled-components";
import { COLOR_TEXT } from "styles/colors";

const Text = styled.div`
  color: ${COLOR_TEXT};
  line-height: 1.3;
  padding: 25px 0;
  max-width: 500px;

  display: block;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  
  strong {
    font-weight: 700;
  }

  span {
    display: block;
    line-height: 1.5;
    font-size: 15px;
    margin-top: 15px;
  }
`;

export default function SimpleText({ children }) {
  return (
    <Text>
      {children}
    </Text>
  );
}
