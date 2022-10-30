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
          '../chakra-config',
          '../i18next-scanner-config',
          '../jest-config',
          '../storybook-config',
          '../tsconfig',
        ],
      },
    ],
  },
};
