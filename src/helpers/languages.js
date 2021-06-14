import { pl } from 'date-fns/locale'
import en_translations from "translations/en.json";
import pl_translations from "translations/pl.json";

export const default_languages = {
  pl: { label: "PL", value: "pl", date_locale: pl, translations: pl_translations },
  en: { label: "EN", value: "en", date_locale: null, translations: en_translations }
};

export function getDateLocale(language_name) {
  return default_languages[language_name].date_locale;
}

export function getDateTranslations(language_name) {
  return default_languages[language_name].translations;
}