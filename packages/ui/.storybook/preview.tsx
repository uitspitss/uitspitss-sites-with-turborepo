import {
  parameters as rootParameters,
  decorators as rootDecorators,
} from 'storybook-config/preview';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import theme from '../src/theme';

export const parameters = {
  ...rootParameters,
  chakra: {
    theme,
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
