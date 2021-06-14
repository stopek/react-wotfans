import { Dialog, DialogContent, withStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { RADIUS } from "styles/colors";

const StyledDialogContent = styled(DialogContent)`
  padding: 0 !important;
  border-radius: ${RADIUS} !important;
`;

const Image = styled.img`
  display: block !important;
`;

const styles = {
  root: {
    borderRadius: RADIUS
  },
  paper: {
    borderRadius: RADIUS
  }
};

function ImagePreviewDialog({ handleClose, open, image, ...props }) {
  return (
    <Dialog
      onClick={handleClose}
      aria-labelledby="max-width-dialog-title"
      open={open}
      maxWidth="xl"
      {...props}
    >
      <StyledDialogContent>
        <Image src={image} />
      </StyledDialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(ImagePreviewDialog);