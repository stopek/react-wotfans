import { menuItems } from "app/settings";
import { MenuItem } from "components/wot/navigation/MenuItem";
import * as React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 75px 0 0 15px;
  padding: 5px;
  position: absolute;
  top: 0;
  width: 50px;
  z-index: -1;
`;

export const IconNavigation = () => (
  <Ul>
    {menuItems.map(item => (
      <MenuItem key={item.i} title={item.title} icon={item.icon} route={item.route} as={`li`} no_title />
    ))}
  </Ul>
);