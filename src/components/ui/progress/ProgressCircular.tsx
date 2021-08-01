import { CircularProgress, CircularProgressProps } from "@material-ui/core";
import PropTypes from "prop-types";
import React from 'react';
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface ProgressCircularInterface extends CircularProgressProps {
  theme?: themesTypes,
}

const ProgressCircular: React.FC<ProgressCircularInterface> = (
  {
    theme = Themes.DefaultTheme,
    variant = 'indeterminate',
    size,
    onChange,
    value,
    ...props
  }
) => {
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
}

ProgressCircular.propTypes = {
  size: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

ProgressCircular.defaultProps = {
  size: 35,
  value: 0
}

export default ProgressCircular;
