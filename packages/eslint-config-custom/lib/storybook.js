module.exports = {
  plugins: ['storybook'],
  extends: ['plugin:storybook/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
  },
};
