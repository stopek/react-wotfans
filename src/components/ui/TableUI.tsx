import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Row from "components/ui/table/Row";
import TableFooter from "components/ui/table/TableFooter";
import TableHeader from "components/ui/table/TableHeader";
import { getComparator, stableSort } from "helpers/table";
import { TableHeaderItem } from "interfaces/TableHeaderItem";
import { TableRowInterface } from "interfaces/TableRowInterface";
import React, { useState } from 'react';
import { injectIntl, WrappedComponentProps } from "react-intl";
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface TableUIInterface extends WrappedComponentProps {
  theme?: themesTypes,
  without_top?: boolean,
  headers: TableHeaderItem[],
  rowsPerPageOptions?: number[],
  items: [],
  nosort?: string[],
  exclude?: { [key: string]: any },
  parse: (data: any) => any
}

function TableUI(
  {
    theme = Themes.DefaultTheme,
    items = [],
    headers = [],
    parse,
    exclude = {},
    nosort = [],
    intl,
    rowsPerPageOptions = [25, 50, 100],
    ...props
  }: TableUIInterface
) {
  const [dense, setDense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleChangeDense = (checked: boolean) => {
    setDense(checked);
  };

  const handleRequestSort = (event: any, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            rowsPerPageOptions={rowsPerPageOptions}
          />
        )}

        <TableContainer>
          <Table
            aria-label="collapsible table"
            size={dense ? 'small' : 'medium'}
          >
            <TableHeader
              headers={headers}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              nosort={nosort}
            />

            <TableBody>
              {stableSort(items, getComparator(order, orderBy), parse)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: TableRowInterface, key: number) => (
                  <Row
                    key={`table-row-${key}`}
                    row={row}
                    index={key}
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
          rowsPerPageOptions={rowsPerPageOptions}
        />
      </Box>
    </ThemeProvider>
  );
}

export default injectIntl(TableUI)
