module.exports = {
  extends: ['airbnb-base'],
  plugins: ['import'],
  env: {
    browser: true,
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
        devDependencies: ['**/*.spec.tsx?', '**/*.config.js'],
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
