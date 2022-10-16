import { parameters as rootParameters } from 'storybook-config/preview';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import i18n from './i18next';

export const parameters = {
  ...rootParameters,
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ja: '日本語',
  },
};

export const decorators = [
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
