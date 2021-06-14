import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { media } from "styles/breakpoints";
import { RADIUS } from "styles/colors";

const Parent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CustomContainer = styled(Container)`
  max-width: ${props => props?.max_width}px !important;
  margin: ${props => props.margin}px 0;
`;

const Content = styled.div`
  background: white;
  border-radius: ${RADIUS};
  padding: 15px;

  ${media.md} {
    padding: 55px;
  }
`;

export default function CenteredContainer({ max_width = 1500, margin = 0, children, ...props }) {
  return (
    <Parent {...props}>
      <CustomContainer
        maxWidth="xl"
        max_width={max_width}
        margin={margin}
      >
        <Content>
          {children}
        </Content>
      </CustomContainer>
    </Parent>
  );
};
