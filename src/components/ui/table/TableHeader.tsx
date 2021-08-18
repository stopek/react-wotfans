import { TableSortLabel } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableHeaderItem } from "interfaces/TableHeaderItem";
import React from "react";
import { FormattedMessage } from "react-intl";

interface TableHeaderInterface {
  headers: TableHeaderItem[],
  nosort: string[],
  order: 'asc' | 'desc',
  orderBy: string,
  onRequestSort: (event: any, property: string) => void
}

function TableHeader({ order, orderBy, onRequestSort, headers, nosort }: TableHeaderInterface) {
  const createSortHandler = (property: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
    if ((!nosort.includes(property) || property === 'child')) {
      onRequestSort(event, property);
    }
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((cell) => (
          <TableCell
            key={cell.id}
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              style={{ cursor: nosort.includes(cell.id) ? 'normal' : 'pointer' }}
              direction={orderBy === cell.id ? order : 'asc'}
              onClick={createSortHandler(cell.id)}
            >
              <>
                {cell?.translation && (
                  <FormattedMessage id={cell.translation} />
                )}
              </>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
