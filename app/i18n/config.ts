import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

export const defaultLanguage = "fr";
export const supportedLanguages = ["fr", "en"] as const;
export type Language = (typeof supportedLanguages)[number];

const resources = {
  fr: {
    translation: frTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  supportedLngs: supportedLanguages,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
