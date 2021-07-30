import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import { themes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

type ButtonInputType = {
  label?: string,
  onClick?: (event: React.InputHTMLAttributes<HTMLButtonElement>) => void,
  theme: string,
  variant: string,
  color: string,
  icon?: JSX.Element,
  route?: string,
  large?: boolean,
  small?: boolean,
  before?: boolean
}

function ButtonInput({ label, onClick, theme, variant, color, icon, route, large, small, before, ...props }: ButtonInputType) {
  const history = useHistory();

  const go = (event: Event) => {
    if (route) {
      return history.push(route);
    }

    if (onClick) {
      return onClick(event);
    }

    return null;
  }

  let size = 'medium';
  if (large) {
    size = 'large';
  }
  if (small) {
    size = 'small';
  }

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        color={color}
        type="submit"
        size={size}
        onClick={go}
        {...props}
      >
        {before && icon && icon}
        {label?.length > 0 && (
          <FormattedMessage id={label} />
        )}
        {!before && icon && icon}
      </Button>
    </ThemeProvider>
  );
}

ButtonInput.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(themes),
  variant: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  route: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  before: PropTypes.bool
}

ButtonInput.defaultProps = {
  theme: 'default_theme',
  variant: 'contained',
  color: 'primary',
  before: true,
  small: false,
  large: false
}

export default ButtonInput;
