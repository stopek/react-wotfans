import Tab from "@material-ui/core/Tab";
import React from "react";

export default function TabItem({ title, value, Icon, ...props }) {
  return (
    <Tab
      label={title}
      value={value}
      icon={<Icon />}
      {...props}
    />
  );
}