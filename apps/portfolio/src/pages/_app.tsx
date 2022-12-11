import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import theme from '../theme';
import { NextPageWithLayout } from '../types/page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
