import { ComponentMeta } from '@storybook/react';
import {
  QueryErrorResetBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { QueryErrorBoundary } from '.';

const queryClient = new QueryClient();

const children = () => {
  return <p>succeeded query</p>;
};

export default {
  component: QueryErrorBoundary,
  args: {
    children,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as ComponentMeta<typeof QueryErrorResetBoundary>;

export const Default = {};
