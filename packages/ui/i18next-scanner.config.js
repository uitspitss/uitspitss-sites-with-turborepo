const rootConfig = require('i18next-scanner-config');

module.exports = {
  ...rootConfig,
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    // Use ! to filter out files or directories
    '!**/*.spec.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!locales/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    ...rootConfig.options,
    defaultNs: 'ui',
    resource: {
      ...rootConfig.resource,
      loadPath: 'static/locales/{{lng}}/{{ns}}.json',
      savePath: 'static/locales/{{lng}}/{{ns}}.json',
    },
  },
};
