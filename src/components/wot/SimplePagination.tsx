import { Grid } from "@material-ui/core";
import Paginator from "components/ui/Paginator";
import PropTypes from "prop-types";
import React from "react";

type SimplePaginationType = {
  page: number,
  pages: number,
  setPage: (page: number) => void
}

function SimplePagination({ page, pages, setPage }: SimplePaginationType) {
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

SimplePagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
}

export default SimplePagination;
