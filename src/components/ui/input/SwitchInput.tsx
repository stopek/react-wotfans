import { FormControlLabel, FormHelperText, Switch } from "@material-ui/core";
import { SwitchProps } from "@material-ui/core/Switch/Switch";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import ThemeProvider from "styles/themes/ThemeProvider";

type SwitchInputType = {
  color: SwitchProps['color'],
  theme: string,
  translation: string,
  required?: boolean,
  checked?: boolean,
  help?: any,
  onChange?: (checked: boolean) => void
}

function SwitchInput({ theme, onChange, translation, required, checked, help, color }: SwitchInputType) {
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
        onChange={(event: React.ChangeEvent<any>) => onChange && onChange(event.target.checked)}
      />
      {help && (<FormHelperText>{help}</FormHelperText>)}
    </ThemeProvider>
  );
}

SwitchInput.propTypes = {
  theme: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  help: PropTypes.node,
}

SwitchInput.defaultProps = {
  theme: 'default_theme',
  color: 'primary',
  checked: false
}

export default SwitchInput;
