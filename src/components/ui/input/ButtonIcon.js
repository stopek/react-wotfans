import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

export const StyledIconButton = withStyles({
  root: {
    padding: '5px 10px'
  }
})(IconButton);

export default function ButtonIcon({ icon, variant = 'primary', ...props }) {
  return (
    <StyledIconButton component="span" color={variant} {...props}>
      {icon}
    </StyledIconButton>
  );
};