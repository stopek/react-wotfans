import Error from "components/core/Error";
import MinimalOverlay from "overlays/Minimal";
import React from "react";

export default function NotFound() {
  return (
    <MinimalOverlay>
      <Error message={`not-found`} />
    </MinimalOverlay>
  );
}
