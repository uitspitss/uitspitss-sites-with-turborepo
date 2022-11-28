import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: { ...proTheme['colors'], brand: proTheme['colors'].gray },
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  },
  proTheme,
);

export default theme;
