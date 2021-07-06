import { Grid } from "@material-ui/core";
import { date_from_unix } from "helpers/date";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { COLOR_TEXT, COLOR_TEXT_ON_THEME, COLOR_THEME } from "styles/colors";

const Content = styled.div`
  width: 100%;
  padding: 20px 10px;
  cursor: pointer;
  color: ${COLOR_TEXT};

  &:hover {
    background: ${COLOR_THEME};
    color: ${COLOR_TEXT_ON_THEME};
  }
`;

const Tag = styled.h3`
  font-size: 30px;
  margin: 0;
  line-height: 1;
`;

const Name = styled.div`
  font-size: 12px;
  line-height: 1;
`;

const Small = styled.div`
  font-size: 14px;
`;

export default function ClanSmallCard({ clan = {}, check, ...props }) {
  return (
    <Content onClick={(event) => check(event, clan?.tag)} {...props}>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          <Tag>{clan?.tag}</Tag>
          <Name>{clan?.name}</Name>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Small>
            <FormattedMessage id={`created.date`} />: <strong>{date_from_unix(clan?.clan_created_at)}</strong>
          </Small>
          <Small>
            <FormattedMessage id={`amount`} />: <strong>{clan?.members_count}</strong>
          </Small>
        </Grid>
      </Grid>
    </Content>
  );
}
