import { Pagination } from "@material-ui/lab";
import React from 'react';
import ThemeProvider from "styles/themes/ThemeProvider";
import PropTypes from "prop-types";

type PaginatorType = {
  theme: string,
  onChange: (page: number) => void,
  page: number,
  count: number
}

function Paginator({ theme, onChange, ...props }: PaginatorType) {
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        showFirstButton
        showLastButton
        onChange={(_, page) => onChange(page)}
        shape="rounded"
        boundaryCount={2}
        siblingCount={1}
        {...props}
      />
    </ThemeProvider>
  );
}

Paginator.propTypes = {
  theme: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

Paginator.defaultProps = {
  theme: 'default_theme'
}

export default Paginator;
