const path = require('path');

/**
 * @type {import('next-i18next').UserConfig}
 **/
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  defaultNS: 'common',
  localePath: path.resolve(
    process.env.NODE_ENV === 'development'
      ? 'apps/portfolio/public/locales'
      : './public/locales'
  ),
  localeStructure: '{{lng}}/{{ns}}',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
