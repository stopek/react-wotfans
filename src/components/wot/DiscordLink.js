import { ReactComponent as DiscordIcon } from "assets/svg/discord.svg";
import PropTypes from 'prop-types';
import React from "react";
import styled from "styled-components";

const Content = styled.span`
  margin-left: 10px;
`;

function DiscordLink({ username }) {
  return (
    <Content>
      <DiscordIcon /> <span>{username}</span>
    </Content>
  );
}

DiscordLink.propTypes = {
  username: PropTypes.string.isRequired,
}

export default DiscordLink;
