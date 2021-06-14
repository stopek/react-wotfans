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
  gap: 10px;
`;

export default function SmallChoice(
  {
    handleClose,
    handleConfirm,
    open = false,
    header = null,
    message = null,
    children,
    confirm_text = 'TAK',
    cancel_text = 'NIE',
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
        <ButtonInput onClick={handleConfirm}>
          {confirm_text}
        </ButtonInput>

        <ButtonInput onClick={handleClose}>
          {cancel_text}
        </ButtonInput>
      </BottomButton>
    </Dialog>
  );
};