import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import { QueryErrorBoundary } from '@/error-boundaries/QueryErrorBoundary';
import theme from '../theme';
import { NextPageWithLayout } from '../types/page';

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
          <QueryErrorBoundary>
            {getLayout(<Component {...pageProps} />)}
          </QueryErrorBoundary>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
