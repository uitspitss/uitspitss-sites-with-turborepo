import i18n from './i18next';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  i18n,
  locale: 'en',
  locales: {
    en: { title: 'English', left: '🇺🇸' },
    ja: { title: '日本語', left: '🇯🇵' },
  },
};

export const decorators = [(Story: Function) => <Story />];
