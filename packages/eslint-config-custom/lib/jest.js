module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest', 'jest-dom'],
  extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.ts', '**/*.spec.tsx', '**/jest.setup.ts'],
      },
    ],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'request.**.expect'],
        additionalTestBlockFunctions: [],
      },
    ],
  },
};
