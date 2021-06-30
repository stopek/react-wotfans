import Tab from "@material-ui/core/Tab";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function TabItem({ translation, value, ...props }) {
  return (
    <Tab
      label={<FormattedMessage id={translation} />}
      value={value}
      {...props}
    />
  );
}
