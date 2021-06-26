import { SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import styled from "styled-components";
import { COLOR_DARK } from "styles/colors";
import { useSmallWhiteIcon } from "styles/use/useSmallWhiteIcon";

const MobileCategoryToggle = styled.div`
  width: 50px;
  height: 50px;
  background: ${COLOR_DARK};
  color: white;
  display: flex;
  border-radius: 50%;
  position: fixed;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function SwipeableContent({ children, anchor = 'left', open = false, openChanger }) {
  const classes = useSmallWhiteIcon();

  return (
    <>

      <MobileCategoryToggle onClick={() => openChanger(true)}>
        <MenuIcon className={classes.root} />
      </MobileCategoryToggle>

      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={() => openChanger(false)}
        onOpen={() => openChanger(true)}
      >
        {children}
      </SwipeableDrawer>
    </>
  );
}
