import { Checkbox, FormControlLabel } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function CheckboxInput(
  {
    theme = 'default_theme',
    onChange,
    label,
    required,
    checked = false
  }
) {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckIcon fontSize="small" />}
            required={required}
            checked={checked}
          />
        }
        id={`standard-checkbox-input-${nanoid()}`}
        label={label}
        onChange={(event) => onChange && onChange(event.target.checked)}
      />
    </ThemeProvider>
  );
};