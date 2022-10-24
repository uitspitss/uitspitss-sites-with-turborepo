/**
 * @type {import('next-i18next').UserConfig}
 **/
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  defaultNS: 'common',
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  localeStructure: '{{lng}}/{{ns}}',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
