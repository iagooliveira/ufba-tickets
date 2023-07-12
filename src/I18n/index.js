/* Reference
 * https://github.com/i18next/react-i18next/blob/master/example/locize/src/i18n.js
 */

import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { isDevelopment } from '../Helpers/environment'//'Helpers/environment';

import { resources } from './lang';

i18n.use(initReactI18next).init({
  lng: 'ptBr',
  fallbackLng: 'ptBr',
  debug: isDevelopment(),
  resources,
  saveMissing: true,
  interpolation: {
    escapeValue: false
  },
  react: {
    bindI18n: 'languageChanged editorSaved'
  }
});

export default i18n;
