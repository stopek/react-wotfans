import tagReplace from "helpers/tagReplace";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl, WrappedComponentProps } from "react-intl";

interface SeoInterface extends WrappedComponentProps {
  title?: string,
  description?: string,
  values?: object
}

function Seo({ title, description, values, intl }: SeoInterface) {
  const seo_title = title && intl.formatMessage({ id: title });
  const seo_description = description && intl.formatMessage({ id: description });

  return (
    <Helmet>
      <title>{title ? tagReplace(seo_title, values) : ' '}</title>
      {description && <meta name="description" content={tagReplace(seo_description, values)} />}
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  values: PropTypes.object
}

export default injectIntl(Seo);
