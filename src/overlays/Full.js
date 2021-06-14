import Base from "overlays/Base";
import React from "react";

export default function FullOverlay(
  {
    children,
    breadcrumbs = [],
    ...props
  }
) {
  return (
    <Base {...props}>
      {children}
    </Base>
  );
}