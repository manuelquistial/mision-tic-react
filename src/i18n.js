import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    backend: {
      loadPath: '/locales/es/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
