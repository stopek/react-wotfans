import React from "react";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

const EmptyContent = styled.div`
  margin: 20px 0;
  border-left: 5px dashed ${COLOR_THEME};
  padding: 15px 25px;
`;

const Header = styled.div`
  font-size: 30px;
  color: #c9c9c9;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 20px;
  color: #808080;
  line-height: 1;
`;

export default function Empty({ message = null, children }) {
  return (
    <EmptyContent>
      {message && <Header>{message}</Header>}

      {children && <Text>{children}</Text>}
    </EmptyContent>
  );
};