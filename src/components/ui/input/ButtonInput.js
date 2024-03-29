import { Button } from "@material-ui/core";
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function ButtonInput(
  {
    label,
    onClick,
    theme = 'default_theme',
    variant = 'contained',
    color = 'primary',
    icon,
    route,
    large,
    small,
    before = true,
    ...props
  }
) {
  const history = useHistory();

  if (route) {
    onClick = () => history.push(route);
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
        onClick={(event) => onClick && onClick(event)}
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
};
