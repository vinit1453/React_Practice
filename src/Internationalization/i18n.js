import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     // we init with resources
//     resources: {
//       en: { ...enJson },
//       hi: { ...hiJson },
//       tel: { ...telJson },
//     }, // Where we're gonna put translations' files
//     fallbackLng: "en",
//     debug: true,

//     // have a common namespace used around the full app
//     ns: ["translations"],
//     defaultNS: "translations",

//     keySeparator: false, // we use content as keys

//     interpolation: {
//       escapeValue: false,
//     },
//   });

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // pass i18n instance to react-i18next.
  .init({
    supportedLngs: ["en", "hi", "tel"], // Add the languages you want to support
    fallbackLng: "en", // Fallback language if detection fails
    debug: true,

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;
