import {
  parameters as rootParameters,
  decorators as rootDecorators,
} from 'storybook-config/preview';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import theme from '../src/theme';

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
  ...rootDecorators,
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
