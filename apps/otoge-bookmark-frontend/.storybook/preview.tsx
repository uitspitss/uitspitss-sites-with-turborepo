import {
  parameters as rootParameters,
  decorators as rootDecorators,
} from 'storybook-config/preview';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ChakraProvider } from '@chakra-ui/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from 'react';

import theme from '../src/theme';

// msw initialize
initialize();

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
  mswDecorator,
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
