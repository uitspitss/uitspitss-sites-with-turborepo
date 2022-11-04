module.exports = {
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['off'],
      },
    },
  ],
};
