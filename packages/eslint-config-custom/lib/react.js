module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'next'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-prop-types': ['off', {}],
  },
};
