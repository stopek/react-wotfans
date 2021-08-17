import { TableRowProps } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { finalValue } from "helpers/table";
import { TableRowInterface } from "interfaces/TableRowInterface";
import React, { useState } from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";

interface SelectInputType extends TableRowProps, WrappedComponentProps {
  row: TableRowInterface,
  index: number,
  exclude: Array<{ [index: keyof TableRowInterface]: boolean }>
}

const Row: React.FC<SelectInputType> = ({ row, index, intl, exclude }) => {
  const [open, setOpen] = useState(false);

  const children =
    Object
      .values(row)
      .find((item) => (typeof item === 'object' && !!item?.child))
      ?.child;

  return (
    <>
      <TableRow hover={true}>
        {children && (
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}

        {Object
          .keys(row)
          .filter((key: any) => !row[key]?.child && !['properties'].includes(key) && (!exclude[key] || exclude[key] === false))
          .map((key: any, no) => {
            const item: object = row[key];

            return (
              <TableCell key={`item-${index}-${key}-${no}`}>
                {finalValue(item, intl)}
              </TableCell>
            );
          })}
      </TableRow>

      {children && (
        <TableRow>
          <TableCell colSpan={Object.keys(row)?.length || 0}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {children}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default injectIntl(Row);
