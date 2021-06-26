import { Grid } from "@material-ui/core";
import Paginator from "components/ui/Paginator";
import React from "react";

export default function SimplePagination({ page, pages, setPage }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container alignItems={`center`} justify={`flex-end`}>
        <Paginator
          page={page}
          count={pages}
          onChange={(page) => setPage(page)}
        />
      </Grid>
    </Grid>
  );
}
