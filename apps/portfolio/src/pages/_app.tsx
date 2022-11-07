import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { appWithTranslation } from 'next-i18next';

import theme from '../theme';
import { NextPageWithLayout } from '../types/page';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>uitspitss&apos; portfolio</title>
        <GoogleAnalytics trackPageViews />
      </Head>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
