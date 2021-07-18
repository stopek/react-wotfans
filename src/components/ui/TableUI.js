import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Row from "components/ui/table/Row";
import TableFooter from "components/ui/table/TableFooter";
import TableHeader from "components/ui/table/TableHeader";
import { getComparator, stableSort } from "helpers/table";
import React from 'react';
import { injectIntl } from "react-intl";
import ThemeProvider from "styles/themes/ThemeProvider";

function TableUI(
  {
    theme = 'default_theme',
    items = [], headers = [],
    parse,
    exclude = {},
    nosort = [],
    intl,
    rowsPerPateOptions = [25, 50, 100],
    ...props
  }
) {
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPateOptions[0]);
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleChangeDense = (checked) => {
    setDense(checked);
  };


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (Object.keys(exclude)?.length > 0) {
    headers = headers.filter((header) => !exclude[header?.id]);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box component={Paper} id={`table-pepper`}>
        {!props?.without_top && (
          <TableFooter
            dense={dense}
            handleChangeDense={handleChangeDense}
            items={items}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPageOptions={rowsPerPateOptions}
          />
        )}

        <TableContainer>
          <Table
            aria-label="collapsible table"
            size={dense ? 'small' : 'medium'}
          >
            <TableHeader
              headCells={headers}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              nosort={nosort}
            />

            <TableBody>
              {stableSort(items, getComparator(order, orderBy), parse)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, key) => (
                  <Row
                    key={`table-row-${key}`}
                    row={row}
                    index={key}
                    intl={intl}
                    exclude={exclude}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableFooter
          dense={dense}
          handleChangeDense={handleChangeDense}
          items={items}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPageOptions={rowsPerPateOptions}
        />
      </Box>
    </ThemeProvider>
  );
}

export default injectIntl(TableUI)
