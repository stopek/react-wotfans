import { pl, ru } from 'date-fns/locale'
import en_translations from "translations/en.json";
import pl_translations from "translations/pl.json";
import ru_translation from "translations/ru.json";

export const default_languages = {
  en: { label: "EN", value: "en", date_locale: null, translations: en_translations },
  ru: { label: "RU", value: "ru", date_locale: ru, translations: ru_translation },
  pl: { label: "PL", value: "pl", date_locale: pl, translations: pl_translations },
};

export function getDateLocale(language_name) {
  return default_languages[language_name].date_locale;
}

export function getDateTranslations(language_name) {
  return default_languages[language_name].translations;
}
