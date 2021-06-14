import { DialogContent, DialogContentText } from "@material-ui/core";
import Texts from "components/ui/Texts";
import React from "react";

export default function CustomDialogContent({ header, message, children }) {
  return (
    <DialogContent>
      <DialogContentText>
        {header &&
        <Texts
          size="18px"
          bottom={25}
          weight={700}
          display="block"
          align="center"
        >
          {header}
        </Texts>}

        {message &&
        <Texts
          size="14px"
          align="center"
          display="block"
          line_height={1.4}
        >
          {message}
        </Texts>}

        {children}
      </DialogContentText>
    </DialogContent>
  );
};