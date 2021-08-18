import { Grid } from "@material-ui/core";
import PercentageBar from "components/wot/PercentageBar";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import { date_from_unix } from "helpers/date";
import { ClanInterface } from "interfaces/ClanInterface";
import React, { SyntheticEvent } from "react";
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

type ClanSmallCardType = {
  clan: ClanInterface,
  check: (event: SyntheticEvent, tag: string) => void
}

export default function ClanSmallCard({ clan, check, ...props }: ClanSmallCardType) {
  return (
    <Content onClick={(event) => check(event, clan?.tag)} {...props}>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Tag>{clan?.tag}</Tag>
              <Name>{clan?.name}</Name>
            </Grid>

            {!!clan?.wn8 && (
              <Grid item xs={6}>
                <Wn8Bar value={clan.wn8} />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Small>
            <FormattedMessage id={`created.date`} />: <strong>{date_from_unix(clan?.clan_created_at)}</strong>
          </Small>

          <Small>
            <FormattedMessage id={`amount`} />: <strong>{clan?.members_count}</strong>
          </Small>
        </Grid>

        <Grid xs={12}>
          <PercentageBar amount={clan?.active_players ?? 0} total={clan?.members_count ?? 0} />
        </Grid>
      </Grid>
    </Content>
  );
}
