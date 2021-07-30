import Footer from "components/Footer";
import { OverlayInterface } from "interfaces/OverlayInterface";
import Base from "overlays/Base";
import React from "react";
import styled from "styled-components";

const Content = styled(Base)`
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #1c1c1c;
`;

export default function MinimalOverlay({ children, ...props }: OverlayInterface) {
  return (
    <Content {...props}>
      {children}

      <Footer />
    </Content>
  );
};
