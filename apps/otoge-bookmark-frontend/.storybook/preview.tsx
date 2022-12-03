import {
  parameters as rootParameters,
  decorators as rootDecorators,
} from 'storybook-config/preview';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from 'react';

import { handlers } from '../src/mocks/handlers';
import theme from '../src/theme';

// msw
initialize();

// query
const queryClient = new QueryClient();

export const parameters = {
  ...rootParameters,
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  msw: {
    handlers,
  },
};

export const decorators = [
  ...rootDecorators,
  // msw
  mswDecorator,
  // query
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
  // chakra
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
