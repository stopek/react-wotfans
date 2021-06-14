import { Checkbox, FormControl, InputAdornment, InputLabel, } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CheckIcon from "@material-ui/icons/Check";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import styled from "styled-components";
import ThemeProvider from "styles/themes/ThemeProvider";

const Placeholder = styled.span`
  font-weight: 600;
  color: rgb(162 162 162);
`;

export default function SelectInput(
  {
    label,
    placeholder,
    prefix_icon,
    onChange,
    theme = 'default_theme',
    variant = 'standard',
    current = null,
    options = [],
    render_checkbox = false,
    value_overlay,
    ...props
  }
) {
  const getMenuItemValue = (id) => {
    return Object.values(options).find((item) => (id === item.id || id === item.value))?.label;
  }

  const menuItems = options.map(({ value, label }) => {
    return (
      <MenuItem value={value} key={value}>
        {props.multiple && render_checkbox && Array.isArray(current) ? (
          <>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckIcon fontSize="small" />}
              checked={current.includes(value)}
            />
            {label}
          </>
        ) : label}
      </MenuItem>
    );
  });

  let custom_params = {};
  if (placeholder) {
    custom_params.renderValue = (selected) => {
      if (!selected?.toString()?.length) {
        return (
          <Placeholder>
            {placeholder}
          </Placeholder>
        );
      }

      const output_value_text = Array.isArray(selected) ?
        selected.map((selection) => getMenuItemValue(selection)).join(', ') :
        getMenuItemValue(selected);

      return (!!value_overlay ? value_overlay(output_value_text) : output_value_text);
    };
  }

  if (prefix_icon) {
    custom_params.startAdornment = <InputAdornment position="start">{prefix_icon}</InputAdornment>
  }

  return (
    <ThemeProvider theme={theme}>
      <FormControl {...props}>
        <InputLabel id="select-input-label">{label}</InputLabel>
        <Select
          displayEmpty
          labelId="select-input-label"
          variant={variant}
          id={`standard-select-input-${nanoid()}`}
          label={label}
          value={current}
          onChange={(event) => onChange && onChange(event.target.value, event)}
          {...custom_params}
          {...props}
        >
          {menuItems}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};
