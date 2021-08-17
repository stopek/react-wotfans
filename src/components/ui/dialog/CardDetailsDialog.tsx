import { Dialog, DialogContent, DialogProps, withStyles } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import styled from "styled-components";
import { RADIUS } from "styles/colors";
import { Themes, themesTypes } from "styles/themes/base";
import ThemeProvider from "styles/themes/ThemeProvider";

const ActionButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
`;

const styles = {
  root: {
    borderRadius: RADIUS
  },
  paper: {
    borderRadius: RADIUS
  }
};

interface CardDetailsInterface extends DialogProps {
  theme?: themesTypes,
  handleClose: (event: React.InputHTMLAttributes<HTMLButtonElement>) => void
}

const CardDetailsDialog: React.FC<CardDetailsInterface> = (
  {
    handleClose,
    open,
    theme = Themes.DefaultTheme,
    children,
    ...props
  }
) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        aria-labelledby="max-width-dialog-title"
        open={open}
        maxWidth="lg"
        fullWidth={true}
        {...props}
      >

        <DialogContent>
          {children}
        </DialogContent>

        <ActionButtonContainer>
          <ButtonInput onClick={handleClose} label={`close`} />
        </ActionButtonContainer>
      </Dialog>
    </ThemeProvider>
  );
}

export default withStyles(styles)(CardDetailsDialog);
