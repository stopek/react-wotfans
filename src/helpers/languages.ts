import { application_languages } from "app/settings";

export function getLanguages() {
  return application_languages;
}

export function getLanguagesValues() {
  return getLanguages().map((language) => language.value);
}

export function findLanguageItem(language_name: string) {
  return getLanguages().find((language) => language.value === language_name) || null;
}

export function getDateLocale(language_name: string) {
  return findLanguageItem(language_name)?.date_locale;
}

export function getDateTranslations(language_name: string) {
  return findLanguageItem(language_name)?.translations;
}

export const getDefaultLanguage = () => {
  const browser_language = navigator.language.split(/[-_]/)[0];

  const available_language = getLanguagesValues().includes(browser_language);
  if (available_language) {
    document.documentElement.lang = browser_language;
    return browser_language;
  }

  return process.env.REACT_APP_DEFAULT_LANG ?? '';
}
