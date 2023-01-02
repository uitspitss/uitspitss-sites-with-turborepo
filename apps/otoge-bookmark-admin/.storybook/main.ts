import path from 'path';
import rootMain from 'storybook-config/main';

const config = {
  ...rootMain,
  staticDirs: ['../public'],
  addons: [
    ...rootMain.addons,
    'storybook-addon-next',
    'storybook-addon-auth0-react',
  ],
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_API_URL: '',
  }),

  webpackFinal: async (config, { configType }) => {
    config = await rootMain.webpackFinal(config, { configType });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};

module.exports = config;
