import { Grid } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import styled from "styled-components";

const Break = styled.div`
  margin-top: 25px;
`;

export default function ClanPaginator({ page, setClansPage }) {
  return (
    <Break>
      <Grid container spacing={2} justify={`flex-end`}>
        <Grid item>
          <ButtonInput
            onClick={() => setClansPage(page - 1)}
            disabled={page <= 0}
            color={`primary`}
            label={`Poprzednia strona`}
          />
        </Grid>

        <Grid item>
          <ButtonInput
            onClick={() => setClansPage(page + 1)}
            color={`primary`}
            label={`Następna strona`}
          />
        </Grid>
      </Grid>
    </Break>
  );
}