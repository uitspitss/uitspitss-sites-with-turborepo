const rootPreview = require('storybook-config/preview.js');

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
  ...rootPreview.parameters,
  chakra: {
    theme,
  },
};

export const decorators = [
  (StoryFn) => <ChakraProvider theme={theme}>{StoryFn()}</ChakraProvider>,
];
