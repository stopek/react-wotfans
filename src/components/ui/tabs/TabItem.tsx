import Tab from "@material-ui/core/Tab";
import { TabItemInterface } from "interfaces/TabItemInterface";
import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

function TabItem({ translation, handleClick, value, ...props }: TabItemInterface) {
  return (
    <Tab
      label={<FormattedMessage id={translation} />}
      value={value}
      {...props}
    />
  );
}

TabItem.propTypes = {
  translation: PropTypes.string,
  value: PropTypes.number
}

export default TabItem;
