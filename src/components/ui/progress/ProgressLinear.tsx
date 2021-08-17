import { LinearProgress, LinearProgressProps } from "@material-ui/core";
import React from 'react';
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface ProgressLinearInterface extends LinearProgressProps {
  theme?: themesTypes,
}

const ProgressLinear: React.FC<ProgressLinearInterface> = (
  {
    theme = Themes.DefaultTheme,
    value,
    ...props
  }
) => {
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
}

export default ProgressLinear;
