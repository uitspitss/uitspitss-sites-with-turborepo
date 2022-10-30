import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';

import theme from '../theme';
import { NextPageWithLayout } from '../types/page';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>uitspitss&apos; portfolio</title>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              id="gtag"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              onReady={() => {
                // @ts-expect-error gtag
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  // @ts-expect-error gtag
                  // eslint-disable-next-line
                  window.dataLayer.push(arguments);
                }
                // @ts-expect-error gtag
                gtag('js', new Date());
                // @ts-expect-error gtag
                gtag('config', GA_MEASUREMENT_ID);
              }}
            />
          </>
        )}
      </Head>
      <ChakraProvider theme={theme}>
        {/* @ts-expect-error FIXME: ts error */}
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
