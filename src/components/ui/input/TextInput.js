import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { nanoid } from "@reduxjs/toolkit";
import Texts from "components/ui/Texts";
import React from "react";
import { FormattedMessage } from "react-intl";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function TextInput(
  {
    type = "text",
    Hint = null,
    label = null,
    resize = false,
    min_height = 10,
    suffix = null,
    theme = 'default_theme',
    variant = 'standard',
    disabled = false,
    readonly,
    value = null,
    isError = false,
    prefix_icon = null,
    onChange,
    up_down,
    ...props
  }
) {
  let input_props = { inputProps: {} };
  if (suffix) {
    input_props.endAdornment = <InputAdornment position="end">{suffix}</InputAdornment>
  }

  if (prefix_icon) {
    input_props.startAdornment = <InputAdornment position="start">{prefix_icon}</InputAdornment>
  }

  if (up_down) {
    const local_value = parseInt(value) || 0;

    const cant_down = (props.min && local_value <= props.min);
    const cant_up = (props.max && local_value >= props.max);

    const upDownClick = (add_down_value) => {
      if (cant_down && add_down_value < 0) {
        return;
      }

      if (cant_up && add_down_value > 0) {
        return;
      }

      onChange(((value && parseInt(value)) || 0) + parseInt(add_down_value));
    }

    input_props.endAdornment = (
      <InputAdornment position="end">
        <IconButton
          aria-label="-1"
          size="small"
          onClick={() => upDownClick(-1)}
          disabled={cant_down}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          aria-label="+1"
          size="small"
          onClick={() => upDownClick(1)}
          disabled={cant_up}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      </InputAdornment>
    );
  }

  if (props.min) {
    input_props.inputProps.min = props.min;
  }

  if (props.max) {
    input_props.inputProps.max = props.max;
  }

  if (disabled) {
    input_props.disabled = true;
  }

  let label_props = {};
  if (!!value) {
    label_props.shrink = true;
  }

  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant={variant}
        id={`standard-text-input-${nanoid()}`}
        label={label && <FormattedMessage id={label} />}
        type={type}
        value={value}
        InputProps={input_props}
        error={isError}
        InputLabelProps={label_props}
        onChange={(event) => onChange && onChange(event.target.value, event)}
        {...props}
      />

      {Hint && (
        <Texts size="12px" line_height={1.3} display="block">
          <Hint />
        </Texts>
      )}
    </ThemeProvider>
  );
};
