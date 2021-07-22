import { TableSortLabel } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function TableHeader(props) {
  const { order, orderBy, onRequestSort, headCells, nosort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((cell) => (
          <TableCell
            key={cell.id}
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              style={{ cursor: nosort.includes(cell.id) ? 'normal' : 'pointer' }}
              direction={orderBy === cell.id ? order : 'asc'}
              onClick={(!nosort.includes(cell.id) || cell.id === 'child') && createSortHandler(cell.id)}
            >
              {cell?.translation && (
                <FormattedMessage id={cell.translation} />
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
