import { Dialog } from "@material-ui/core";
import CustomDialogContent from "components/ui/dialog/CustomDialogContent";
import ButtonInput from "components/ui/input/ButtonInput";
import React from "react";
import styled from "styled-components";
import { RADIUS } from "styles/colors";

const BottomButton = styled.div`
  margin-bottom: -20px;
  display: flex;
  justify-content: center;
`;

export default function SmallConfirm(
  {
    handleClose,
    open = false,
    header = null,
    message = null,
    children,
    ...props
  }
) {
  return (
    <Dialog
      PaperProps={{
        style: { borderRadius: RADIUS, maxWidth: 300, overflow: 'unset' }
      }}
      fullWidth={false}
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      {...props}
    >
      <CustomDialogContent
        header={header}
        message={message}
      />

      <BottomButton>
        <ButtonInput onClick={handleClose}>OK</ButtonInput>
      </BottomButton>
    </Dialog>
  );
};