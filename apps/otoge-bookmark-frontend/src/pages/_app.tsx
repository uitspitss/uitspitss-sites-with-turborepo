import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { appWithTranslation } from 'next-i18next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme from '../theme';
import { NextPageWithLayout } from '../types/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GoogleAnalytics trackPageViews />
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
