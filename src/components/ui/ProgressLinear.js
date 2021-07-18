import { LinearProgress } from "@material-ui/core";
import React from 'react';
import ThemeProvider from "styles/themes/ThemeProvider";

export default function ProgressLinear({ theme = 'default_theme', value, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <LinearProgress
        color={`secondary`}
        variant="determinate"
        value={value}
        {...props}
      />
    </ThemeProvider>
  );
};
