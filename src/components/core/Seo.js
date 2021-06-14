import tagReplace from "helpers/tagReplace";
import React from "react";
import { Helmet } from "react-helmet";

export default function Seo({ title = null, description = null, values = {} }) {
  return (
    <Helmet>
      <title>{title ? tagReplace(title, values) : ' '}</title>
      {description && <meta name="description" content={tagReplace(description, values)} />}
    </Helmet>
  );
}