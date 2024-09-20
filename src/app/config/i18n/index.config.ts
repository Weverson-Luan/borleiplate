import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../common/locales/english.json";
import brazil from "../../common/locales/brazil.json";

const resources = {
  en: { translation: en },
  brazil: { translation: brazil },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18next;
