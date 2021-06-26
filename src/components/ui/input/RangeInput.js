import { Slider, Typography } from "@material-ui/core";
import React from 'react';
import { FormattedMessage } from "react-intl";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function RangeInput(
  {
    theme = 'default_theme',
    color = 'primary',
    value = [],
    onChange,
    step = 10,
    label = ''
  }
) {
  return (
    <ThemeProvider theme={theme}>
      <Slider
        value={value}
        color={color}
        onChange={(event, value) => onChange(value)}
        aria-labelledby="discrete-slider-always"
        step={step}
        valueLabelDisplay="on"
      />

      {label?.length > 0 && (
        <Typography>
          <FormattedMessage id={label} />
        </Typography>
      )}
    </ThemeProvider>
  );
};
