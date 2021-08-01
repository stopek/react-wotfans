import { Checkbox, FormControl, InputAdornment, InputLabel, InputLabelProps, } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { SelectProps } from "@material-ui/core/Select/Select";
import CheckIcon from "@material-ui/icons/Check";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { nanoid } from "@reduxjs/toolkit";
import { SelectItemInterface } from "interfaces/SelectItemInterface";
import React, { ChangeEvent } from "react";
import { FormattedMessage, injectIntl, WrappedComponentProps } from "react-intl";
import { Themes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface SelectInputType extends WrappedComponentProps {
  translation: string,
  theme?: Themes,
  variant?: InputLabelProps['variant'],
  current: any,
  render_checkbox?: boolean,
  handleChange: (value: any, event: ChangeEvent<{ name?: string, value: unknown }>) => void,
  options: SelectItemInterface[],
  multiple?: boolean,
  prefix_icon?: any,
  value_overlay?: (value: any) => any
}

const SelectInput: React.FC<SelectInputType> = (
  {
    intl,
    translation,
    prefix_icon,
    handleChange,
    theme = Themes.DefaultTheme,
    variant,
    current,
    options,
    render_checkbox,
    value_overlay,
    multiple,
    ...props
  }
) => {
  const getMenuItemValue = (id: unknown) => {
    const item = options.find((item) => (id === item.id || id === item.value));

    return item?.label ?? (item?.translation ? intl.formatMessage({ id: item?.translation }) : (item?.value ?? ''));
  }

  const menuItems = options.map(({ value, label = '', translation = '' }) => {
    const displayLabel = !!translation ? <FormattedMessage id={translation} /> : label;

    return (
      <MenuItem value={value} key={value}>
        {multiple && render_checkbox && Array.isArray(current) ? (
          <>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckIcon fontSize="small" />}
              checked={current.includes(value)}
            />
            {displayLabel}
          </>
        ) : displayLabel}
      </MenuItem>
    );
  });

  let custom_params: SelectProps = {};
  custom_params.renderValue = (selected?: unknown) => {
    if (!selected) {
      return null;
    }

    const output_value_text = Array.isArray(selected) ? selected.map((selection) => getMenuItemValue(selection)).join(', ') : getMenuItemValue(selected);
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
          onChange={(event) => handleChange && handleChange(event.target.value, event)}
          {...custom_params}
          {...props}
        >
          {menuItems}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

//@todo - wrócić do typowania.
// SelectInput.propTypes = {
//   translation: PropTypes.string.isRequired,
//   theme: PropTypes.oneOf<Themes>(themesList),
//   variant: PropTypes.string,
//   current: PropTypes.node,
//   render_checkbox: PropTypes.bool,
//   handleChange: PropTypes.func,
//   options: PropTypes.array,
//   multiple: PropTypes.bool,
//   prefix_icon: PropTypes.node,
//   value_overlay: PropTypes.func
// }
//
// SelectInput.defaultProps = {
//   theme: Themes.DefaultTheme,
//   variant: 'standard',
//   current: null,
//   render_checkbox: false,
//   multiple: false,
//   options: []
// }

export default injectIntl(SelectInput);
