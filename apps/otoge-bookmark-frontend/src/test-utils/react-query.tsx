import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

// REF: https://github.com/TkDodo/testing-react-query/blob/main/src/tests/utils.tsx
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      error: () => {},
    },
  });

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();

  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
