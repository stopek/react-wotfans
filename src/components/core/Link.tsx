import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";

type LinkProps = {
  route: string,
  title: string
};

function Link({ route, title }: LinkProps) {
  const history = useHistory();

  const handleClickItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    history.push(route);
  }

  return (
    <a href={route} onClick={handleClickItem}>
      <FormattedMessage id={title} />
    </a>
  );
}

Link.propTypes = {
  route: PropTypes.string,
  link: PropTypes.string
}

export default Link;
