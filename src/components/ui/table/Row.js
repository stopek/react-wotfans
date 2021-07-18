import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { finalValue } from "helpers/table";
import React, { useState } from "react";
import { injectIntl } from "react-intl";

function Row({ row = [], index, intl, exclude }) {
  const [open, setOpen] = useState(false);

  const children = Object
    .values(row)
    .find((item) => (typeof item === 'object' && !!item?.child))
    ?.child;

  // const properties = Object.keys(row).find((k) => k === 'properties');

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

        {Object.keys(row).filter((key) => !row[key]?.child && !['properties'].includes(key) && (!exclude[key] || exclude[key] === false)).map((key, no) => {
          const item = row[key];

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
