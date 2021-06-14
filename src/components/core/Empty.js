import Texts from "components/ui/Texts";
import React from "react";
import styled from "styled-components";

const EmptyContent = styled.div`
  margin: 20px 0;
`;

export default function Empty({ message = null, align = 'left', children }) {
  return (
    <EmptyContent>
      {message && <Texts size="25px" display="block" align={align} weight={900} bottom={children && 10}>
        {message}
      </Texts>}

      {children && <Texts display="block" size="15px" align={align} weight={500} bottom={10}>
        {children}
      </Texts>}
    </EmptyContent>
  );
};