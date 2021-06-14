import { Pagination } from "@material-ui/lab";
import React from 'react';
import ThemeProvider from "styles/themes/ThemeProvider";

export default function Paginator({ theme = 'default_theme', onChange, ...props }) {
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
};