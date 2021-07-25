import { CircularProgress } from "@material-ui/core";
import React from 'react';
import ThemeProvider from "styles/themes/ThemeProvider";

export default function ProgressCircular(
  {
    theme = 'default_theme',
    variant = 'indeterminate',
    size = 35,
    onChange,
    value = 0,
    ...props
  }
) {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress
        size={size}
        thickness={4}
        variant={variant}
        value={value}
        {...props}
      />
    </ThemeProvider>
  );
};
