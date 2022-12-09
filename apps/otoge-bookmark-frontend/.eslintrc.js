module.exports = {
  root: true,
  extends: ['custom/presets/next'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: [
          '.',
          '../../packages/i18next-scanner-config',
          '../../packages/jest-config',
          '../../packages/storybook-config',
          '../../packages/tsconfig',
          '../../packages/ui',
        ],
      },
    ],
  },
};
