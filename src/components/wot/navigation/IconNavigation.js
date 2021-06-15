import { menuItems } from "app/settings";
import { MenuItem } from "components/wot/navigation/MenuItem";
import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Ul = styled.ul`
  margin: 75px 0 0 5px;
  
  @media ${breakpoint.md} {
    margin: 75px 0 0 15px;
  }
  
  padding: 5px;
  position: absolute;
  top: 0;
  width: 50px;
  z-index: -1;
`;

export const IconNavigation = () => (
  <Ul>
    {menuItems.map(item => (
      <MenuItem
        key={item.i}
        translation={item.translation}
        icon={item.icon}
        route={item.route}
        as={`li`}
        href={item?.href}
        no_title
      />
    ))}
  </Ul>
);