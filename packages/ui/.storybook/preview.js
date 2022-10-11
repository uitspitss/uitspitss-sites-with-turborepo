import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  chakra: {
    theme,
  },
};

export const decorators = [
  (StoryFn) => <ChakraProvider theme={theme}>{StoryFn()}</ChakraProvider>,
];
