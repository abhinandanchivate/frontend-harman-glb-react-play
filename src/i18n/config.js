import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';
import enUS from './locales/en-US.json';
import arAE from './locales/ar-AE.json';
import zhCN from './locales/zh-CN.json';
import deDE from './locales/de-DE.json';
import enXA from './locales/en-XA.json';

const resources = {
  'en-US': { translation: enUS },
  'ar-AE': { translation: arAE },
  'zh-CN': { translation: zhCN },
  'de-DE': { translation: deDE },
  'en-XA': { translation: enXA },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'customDetector',
  lookup(options) {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang) return urlLang;
    const cookieLang = Cookies.get('i18next');
    if (cookieLang) return cookieLang;
    const localStorageLang = localStorage.getItem('preferredLocale');
    if (localStorageLang) return localStorageLang;
    return null;
  },
  cacheUserLanguage(lng) {
    Cookies.set('i18next', lng, { expires: 365 });
    localStorage.setItem('preferredLocale', lng);
  }
});

i18n.use(languageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en-US',
  debug: false,
  detection: {
    order: ['customDetector', 'querystring', 'cookie', 'localStorage', 'navigator'],
    caches: ['cookie', 'localStorage'],
  },
  interpolation: { escapeValue: false },
  react: {
    useSuspense: false,
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p']
  }
});

export default i18n;
