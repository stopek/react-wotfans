import { FormControlLabel, FormHelperText, Switch } from "@material-ui/core";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { FormattedMessage } from "react-intl";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function SwitchInput(
  {
    theme = 'default_theme',
    onChange,
    translation,
    required,
    checked = false,
    help = null,
    color = 'primary'
  }
) {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            required={required}
            color={color}
          />
        }
        id={`standard-checkbox-input-${nanoid()}`}
        label={<FormattedMessage id={translation} />}
        onChange={(event) => onChange && onChange(event.target.checked)}
      />
      {help && (<FormHelperText>{help}</FormHelperText>)}
    </ThemeProvider>
  );
};
