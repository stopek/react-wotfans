import { menuItems } from "app/settings";
import { MenuItem } from "components/wot/navigation/MenuItem";
import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Ul = styled(motion.ul)`
  margin: 0;
  padding: 0 20px;
  position: absolute;
  top: 80px;
  width: 100%;
  box-sizing: border-box;
`;

export const Navigation = () => (
  <Ul variants={variants}>
    {menuItems.map(item => (
      <MenuItem key={item.i} title={item.title} icon={item.icon} route={item.route} />
    ))}
  </Ul>
);