import { Dialog, DialogContent, DialogContentText, withStyles } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import styled from "styled-components";
import { RADIUS } from "styles/colors";

const ActionButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  bottom: 10px;
`;

const styles = {
  root: {
    borderRadius: RADIUS
  },
  paper: {
    borderRadius: RADIUS
  }
};

function CardDetailsDialog({ handleClose, open, image, children, ...props }) {
  return (
    <Dialog
      onClick={handleClose}
      aria-labelledby="max-width-dialog-title"
      open={open}
      maxWidth="lg"
      fullWidth={true}
      {...props}
    >

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>

      <ActionButtonContainer>
        <ButtonInput onClick={handleClose} label="Zamknij" large />
      </ActionButtonContainer>
    </Dialog>
  );
}

export default withStyles(styles)(CardDetailsDialog);