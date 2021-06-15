import React from "react";
import { IntlProvider } from "react-intl";
import { getDateTranslations } from "helpers/languages";
import { useSelector } from "react-redux";
import { selectedLanguage } from "reducers/languageSlice";

export default function LanguageProvider({ children }) {
  const language = useSelector(selectedLanguage);

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