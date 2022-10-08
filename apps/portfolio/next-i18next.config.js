const path = require('path');

/**
 * @type {import('next-i18next').UserConfig}
 **/
module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
  defaultNS: 'common',
  localePath: 'public/locales',
  localeStructure: '{{lng}}/{{ns}}',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
