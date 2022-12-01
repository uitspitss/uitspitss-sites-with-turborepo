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
    '**/lib/$path.ts',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.js'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
