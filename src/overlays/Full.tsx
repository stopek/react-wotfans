import { OverlayInterface } from "interfaces/OverlayInterface";
import Base from "overlays/Base";
import React from "react";

export default function FullOverlay({ children, ...props }: OverlayInterface) {
  return (
    <Base {...props}>
      {children}
    </Base>
  );
}
