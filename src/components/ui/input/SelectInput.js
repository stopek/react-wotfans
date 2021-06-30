import { Checkbox, FormControl, InputAdornment, InputLabel, } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CheckIcon from "@material-ui/icons/Check";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import ThemeProvider from "styles/themes/ThemeProvider";

function SelectInput(
  {
    intl,
    translation,
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
    const item = Object.values(options).find((item) => (id === item.id || id === item.value));

    return item?.label ?? (item?.translation ? intl.formatMessage({ id: item?.translation }) : item.value);
  }

  const menuItems = options.map(({ value, label = '', translation = '' }) => {
    label = translation?.length > 0 ? <FormattedMessage id={translation} /> : label;

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
  custom_params.renderValue = (selected) => {
    if (!selected?.toString()?.length) {
      return null;
    }

    const output_value_text = Array.isArray(selected) ?
      selected.map((selection) => getMenuItemValue(selection)).join(', ') :
      getMenuItemValue(selected);

    return (!!value_overlay ? value_overlay(output_value_text) : output_value_text);
  };

  if (prefix_icon) {
    custom_params.startAdornment = <InputAdornment position="start">{prefix_icon}</InputAdornment>
  }

  return (
    <ThemeProvider theme={theme}>
      <FormControl {...props}>
        <InputLabel id="select-input-label">
          <FormattedMessage id={translation} />
        </InputLabel>
        <Select
          displayEmpty
          labelId="select-input-label"
          variant={variant}
          id={`standard-select-input-${nanoid()}`}
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
}

export default injectIntl(SelectInput);
