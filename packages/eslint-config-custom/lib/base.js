module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['import'],
  env: {
    es6: true,
    commonjs: true,
  },
  ignorePatterns: [
    '.git/',
    '*ignore',
    'node_modules/',
    '.yarn/',
    'yarn.lock',
    'Dockerfile*',
    '*.config.js',
    '*.json',
    '*.ya?ml',
    'coverage/',
    'build/',
    '.next/',
    'public/',
    '*.min.js',
    'out/',
    'storybook-static/',
    '*.snap',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.js', '**/*.config.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
