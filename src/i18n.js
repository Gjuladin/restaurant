import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

//available languages
import translationMK from "./locales/mk.json";
import translationEN from "./locales/en.json";
import translationSQ from "./locales/sq.json";
const resources = {
  mk: {
    translation: translationMK,
  },
  sq: {
    translation: translationSQ,
  },
  en: {
    translation: translationEN,
  },
};

const language = localStorage.getItem("I18N_LANGUAGE");
if (!language) {
  localStorage.setItem("I18N_LANGUAGE", "en");
}

i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("I18N_LANGUAGE") || "en",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
