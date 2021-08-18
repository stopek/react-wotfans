import { Button, ButtonProps } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { MouseEventHandler, SyntheticEvent } from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

interface ButtonInputInterface extends ButtonProps {
  label?: string,
  onClick?: (event: SyntheticEvent) => void,
  theme?: themesTypes,
  icon?: JSX.Element,
  route?: string,
  large?: boolean,
  small?: boolean,
  before?: boolean
}

const ButtonInput: React.FC<ButtonInputInterface> = (
  {
    label,
    onClick,
    theme = Themes.DefaultTheme,
    variant,
    color,
    icon,
    route,
    large,
    small,
    before,
    ...props
  }
) => {
  const history = useHistory();

  const go = (event: SyntheticEvent) => {
    if (route) {
      return history.push(route);
    }

    if (onClick) {
      return onClick(event);
    }

    return null;
  }

  let size: ButtonProps['size'] = (large ? 'large' : (small ? 'small' : 'medium'));

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
        {!!label && (
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
  icon: PropTypes.element,
  route: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  before: PropTypes.bool
}

ButtonInput.defaultProps = {
  variant: 'contained',
  color: 'primary',
  before: true,
  small: false,
  large: false
}

export default ButtonInput;
