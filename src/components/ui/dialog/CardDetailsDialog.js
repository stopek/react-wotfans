import { Dialog, DialogContent, withStyles } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import styled from "styled-components";
import { RADIUS } from "styles/colors";
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

function CardDetailsDialog(
  {
    handleClose, open, image,
    theme = 'default_theme',
    children, ...props
  }
) {
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
