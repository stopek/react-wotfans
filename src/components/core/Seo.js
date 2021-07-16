import tagReplace from "helpers/tagReplace";
import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "react-intl";

function Seo({ title = null, description = null, values = {}, intl }) {
  const seo_title = title && intl.formatMessage({ id: title });
  const seo_description = description && intl.formatMessage({ id: description });

  return (
    <Helmet>
      <title>{title ? tagReplace(seo_title, values) : ' '}</title>
      {description && <meta name="description" content={tagReplace(seo_description, values)} />}
    </Helmet>
  );
}

export default injectIntl(Seo);
