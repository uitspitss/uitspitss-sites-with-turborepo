import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    colors: { ...proTheme['colors'], brand: proTheme['colors'].gray },
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  },
  proTheme
);

export default theme;
