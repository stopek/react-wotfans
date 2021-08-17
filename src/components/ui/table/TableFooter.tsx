import { Grid, TablePagination } from "@material-ui/core";
import SwitchInput from "components/ui/input/SwitchInput";
import TablePaginationActions from "components/ui/table/TablePaginationActions";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

type TableFooterType = {
  dense?: boolean,
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void,
  rowsPerPage: number,
  page: number,
  rowsPerPageOptions: number[],
  items: Array<object>,
  handleChangeRowsPerPage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  handleChangeDense: (checked: boolean) => void
}

const TableFooter: React.FC<TableFooterType> = (
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
) => {
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
          component={`div`}
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

TableFooter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dense: PropTypes.bool,
  handleChangePage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}

TableFooter.defaultProps = {
  items: []
}

export default TableFooter;
