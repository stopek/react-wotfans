import { InputAdornment, InputLabelProps, TextField } from "@material-ui/core";
import { InputProps as StandardInputProps } from "@material-ui/core/Input/Input";
import { BaseTextFieldProps } from "@material-ui/core/TextField/TextField";
import { nanoid } from "@reduxjs/toolkit";
import Texts from "components/ui/Texts";
import PropTypes from "prop-types";
import React, { ChangeEvent } from "react";
import { FormattedMessage } from "react-intl";
import { Themes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface TextInputType extends BaseTextFieldProps {
  hint?: JSX.Element,
  suffix?: JSX.Element,
  label?: string,
  theme?: Themes,
  variant?: InputLabelProps['variant'],
  disabled?: boolean,
  isError?: boolean,
  handleChange: (value: any, event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputType> = (
  {
    type = 'text',
    hint,
    label,
    suffix,
    theme = Themes.DefaultTheme,
    variant,
    disabled,
    value,
    isError,
    handleChange,
    ...props
  }
) => {
  let input_props: Partial<StandardInputProps> = {
    inputProps: {},
    endAdornment: null,
  };

  if (suffix) {
    input_props.endAdornment = <InputAdornment position="end">{suffix}</InputAdornment>
  }

  if (disabled) {
    input_props.disabled = true;
  }

  let label_props: Partial<InputLabelProps> = {};
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
        onChange={(event) => handleChange && handleChange(event.target.value, event)}
        {...props}
      />

      {!!hint && (
        <Texts size="12px" line_height={1.3} display="block">
          {hint}
        </Texts>
      )}
    </ThemeProvider>
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  hint: PropTypes.element,
  label: PropTypes.string,
  suffix: PropTypes.element,
  disabled: PropTypes.bool,
  value: PropTypes.node,
  isError: PropTypes.bool
}

TextInput.defaultProps = {
  type: 'text',
  variant: 'standard',
  value: '',
  isError: false,
}

export default TextInput;
