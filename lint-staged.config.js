module.exports = {
  '**/*.{ts,tsx,json,graphql}': ['prettier --write'],
  '**/*.{ts,tsx}': ['eslint --fix', 'bash -c tsc --noEmit'],
};
