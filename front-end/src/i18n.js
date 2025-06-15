import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      switchLanguage: 'Switch to Thai'
    }
  },
  th: {
    translation: {
      greeting: 'สวัสดี!',
      switchLanguage: 'เปลี่ยนเป็นภาษาอังกฤษ'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;