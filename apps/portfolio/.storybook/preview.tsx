import { parameters as rootParameters } from 'storybook-config/preview';
import { I18nextProvider } from 'react-i18next';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import i18n from './i18n';

export const parameters = {
  ...rootParameters,
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story: Function) => (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    </I18nextProvider>
  ),
];
