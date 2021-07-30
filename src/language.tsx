import { useAppSelector } from "app/hooks";
import { getDateTranslations } from "helpers/languages";
import { ChildrenInterface } from "interfaces/ChildrenInterface";
import PropTypes from "prop-types";
import React from "react";
import { IntlProvider } from "react-intl";
import { selectedLanguage } from "reducers/languageSlice";

function LanguageProvider({ children }: ChildrenInterface) {
  const language = useAppSelector(selectedLanguage);

  return (
    <IntlProvider
      locale={language}
      defaultLocale={language}
      messages={getDateTranslations(language)}
    >
      {children}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.element
}

export default LanguageProvider;
