import { CLAN_URL } from "app/routes";
import PlayerClanRoleIcon from "components/wot/clans/PlayerClanRoleIcon";
import fillRoute from "helpers/fillRoute";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_TEXT, RADIUS } from "styles/colors";

const Name = styled.div`
  display: flex;
  width: 100%;
  color: ${COLOR_TEXT};
`;

const Content = styled.div`
  display: inline-flex;
  border-radius: ${RADIUS};
  gap: 5px;
  align-items: center;
  background: black;
  padding: 5px 0;
  white-space: nowrap;
  
  ${props => props?.pointer && `cursor: pointer;`}
`;

export default function RoleWithClanButton({ role = '', tag = '' }) {
  const history = useHistory();

  const isTag = tag?.length > 0;

  return (
    <Content
      pointer={isTag}
      onClick={() => isTag && history.push(fillRoute(CLAN_URL, { tag: tag }))}
    >
      <PlayerClanRoleIcon role_name={role} />
      {isTag && (
        <Name>
          {tag}
        </Name>
      )}
    </Content>
  );
}
