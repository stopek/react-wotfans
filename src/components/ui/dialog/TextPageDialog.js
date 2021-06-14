import { Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import ButtonInput from "components/ui/input/ButtonInput";
import { findStaticPageById } from "helpers/text";
import TextPage from "pages/TextPage";
import React from "react";
import ThemeProvider from "styles/themes/ThemeProvider";

export default function TextPageDialog(
  {
    handleClose,
    open,
    id,
    theme = 'default_theme',
    ...props
  }
) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        aria-describedby="alert-dialog-description"
        open={open}
        maxWidth="lg"
        {...props}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextPage slug={findStaticPageById(id)?.slug} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonInput onClick={handleClose} label="Zamknij" />
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};