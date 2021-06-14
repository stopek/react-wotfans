import NotFoundBox from "components/errors/NotFoundBox";
import MinimalOverlay from "overlays/Minimal";
import React from "react";

export default function NotFound() {
  return (
    <MinimalOverlay>
      <NotFoundBox />
    </MinimalOverlay>
  );
}