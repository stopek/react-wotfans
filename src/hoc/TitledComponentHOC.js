import React from "react";

export default function TitledComponentHOC(OriginalComponent, params) {
  return class HOCComponent extends React.Component {
    render() {
      return (
        <OriginalComponent {...params} />
      );
    }
  }
}