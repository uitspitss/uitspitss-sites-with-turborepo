import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  chakra: {
    theme,
  },
};

export const decorators = [
  (StoryFn: () => ReactNode) => (
    <Box as="section" bg="bg-surface" pt="18">
      {StoryFn()}
    </Box>
  ),
];
