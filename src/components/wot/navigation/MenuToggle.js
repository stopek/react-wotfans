import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const ToggleButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 50px;
  padding: 0;
  background: transparent;
  dispay: flex;
  align-items: center;
  justify-content: center;

  @media ${breakpoint.md} {
    width: 50px;
  }
  
  svg {
    fill: white;
    storke: white;
  }
`;

export const MenuToggle = ({ toggle }) => (
  <ToggleButton onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </ToggleButton>
);
