import React from 'react';

import i18n from './i18next';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  i18n,
  locale: 'en',
  locales: {
    en: { title: 'English', left: 'πΊπΈ' },
    ja: { title: 'ζ₯ζ¬θͺ', left: 'π―π΅' },
  },
};

export const decorators = [(Story: Function) => <Story />];
