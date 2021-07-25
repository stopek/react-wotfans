import { footerMenuItems } from "app/settings";
import Copyright from "components/core/Copyright";
import LargeNavigation from "components/ui/menu/LargeNavigation";
import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  margin-top: auto;
  padding-top: 55px;
`;

export default function Footer() {
  return (
    <FooterBox>
      <LargeNavigation items={footerMenuItems} />
      <Copyright />
    </FooterBox>
  );
};
