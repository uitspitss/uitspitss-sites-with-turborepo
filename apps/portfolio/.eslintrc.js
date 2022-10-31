module.exports = {
  root: true,
  extends: ['custom/presets/react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: [
          '.',
          '../../packages/chakra-config',
          '../../packages/i18next-scanner-config',
          '../../packages/jest-config',
          '../../packages/react-config',
          '../../packages/storybook-config',
          '../../packages/tsconfig',
          '../../packages/ui',
        ],
      },
    ],
  },
};
