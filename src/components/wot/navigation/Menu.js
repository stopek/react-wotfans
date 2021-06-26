import { IconNavigation } from "components/wot/navigation/IconNavigation";
import { MenuToggle } from "components/wot/navigation/MenuToggle";
import { Navigation } from "components/wot/navigation/Navigation";
import { useDimensions } from "components/wot/navigation/useDimensions";
import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { COLOR_THEME } from "styles/colors";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${COLOR_THEME};
`;

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: ${props => props?.isOpen ? 100 : 1};
`;

export default function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      isOpen={isOpen}
      ref={containerRef}
    >
      {isOpen && (
        <>
          <Background variants={sidebar} />
          <Navigation />
        </>
      )}
      <MenuToggle toggle={() => toggleOpen()} />
      <IconNavigation />
    </Nav>
  );
};
