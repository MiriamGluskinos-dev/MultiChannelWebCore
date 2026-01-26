import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import baseTranslationsEn from './locales/en.json';
import baseTranslationsHe from './locales/he.json';

i18n.use(initReactI18next).init({
  interpolation: {    escapeValue: false  },
  fallbackLng: 'en',
  lng: 'he',
  resources: {
    en: {
      translations: baseTranslationsEn
    },
    he: {
      translations: baseTranslationsHe
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'he'];

export default i18n;