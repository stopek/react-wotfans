import { ReactComponent as DiscordIcon } from "assets/svg/discord.svg";
import React from "react";
import styled from "styled-components";

const Content = styled.span`
  margin-left: 10px;
`;

export default function DiscordLink({ username = '' }) {
  return (
    <Content>
      <DiscordIcon /> <span>{username}</span>
    </Content>
  );
}
