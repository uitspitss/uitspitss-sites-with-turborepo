import rootMain from 'storybook-config/main';

const config = {
  ...rootMain,
  // webpackFinal: async (config, { configType }) => {
  //   config = await rootMain.webpackFinal(config, { configType });
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return {
  //     ...config,
  //     node: {
  //       ...config.node,
  //       fs: 'empty',
  //     },
  //   };
  // },
  staticDirs: ['../public'],
  addons: [
    ...rootMain.addons,
    'storybook-addon-next-router',
    'storybook-react-i18next',
  ],
};

module.exports = config;
