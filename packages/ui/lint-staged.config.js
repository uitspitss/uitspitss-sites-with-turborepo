module.exports = {
  '**/*.{ts,tsx,json,graphql}': ['prettier --write'],
  '**/*.{ts,tsx}': ['eslint --fix -c .eslintrc.js', 'bash -c tsc --noEmit'],
};
