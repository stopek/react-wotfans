import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";

export default function Link({ route, title }) {
  const history = useHistory();

  const handleClickItem = (event) => {
    event.preventDefault();
    history.push(route);
  }

  return (
    <a href={route} onClick={handleClickItem}>
      <FormattedMessage id={title} />
    </a>
  );
}
