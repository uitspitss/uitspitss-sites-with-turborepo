import { parameters as rootParameters } from 'storybook-config/preview';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
  ...rootParameters,
  chakra: {
    theme,
  },
};

export const decorators = [
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
