import { CircularProgress } from "@material-ui/core";
import React from 'react';
import ThemeProvider from "styles/themes/ThemeProvider";

export default function ProgressCircular({ theme = 'default_theme', onChange, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress
        size={35}
        thickness={4}
        {...props}
      />
    </ThemeProvider>
  );
};
