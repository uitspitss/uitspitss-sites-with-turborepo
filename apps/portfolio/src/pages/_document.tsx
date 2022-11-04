import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '@/theme';
import i18NextConfig from '../../next-i18next.config';

export default class Document extends NextDocument {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18NextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
