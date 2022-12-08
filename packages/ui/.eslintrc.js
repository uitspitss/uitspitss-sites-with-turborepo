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
          '../i18next-scanner-config',
          '../jest-config',
          '../react-config',
          '../storybook-config',
          '../tsconfig',
        ],
      },
    ],
  },
};
