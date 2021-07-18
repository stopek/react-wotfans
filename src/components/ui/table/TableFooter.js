import { Grid, TablePagination } from "@material-ui/core";
import SwitchInput from "components/ui/input/SwitchInput";
import TablePaginationActions from "components/ui/table/TablePaginationActions";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function TableFooter(
  {
    dense,
    handleChangeDense,
    items,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPageOptions
  }
) {
  return (
    <Grid container alignItems={`center`}>
      <Grid item sm={3} xs={12}>
        <SwitchInput
          checked={dense}
          onChange={handleChangeDense}
          translation={`dense`}
        />
      </Grid>
      <Grid item sm={9} xs={12}>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={<FormattedMessage id={`rows.per.page`} />}
          labelDisplayedRows={({ from, to, count }) => (
            <>
              {from}-{to} <FormattedMessage id={`of`} /> {count}
            </>
          )}
          ActionsComponent={TablePaginationActions}
        />
      </Grid>
    </Grid>
  );
}
