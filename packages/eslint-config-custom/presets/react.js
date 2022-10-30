module.exports = {
  extends: [
    '../lib/base.js',
    '../lib/react.js',
    '../lib/next.js',
    '../lib/typescript.js',
    '../lib/prettier.js',
    '../lib/jest.js',
    '../lib/storybook.js',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.tsx?'],
      },
    ],
  },
};
