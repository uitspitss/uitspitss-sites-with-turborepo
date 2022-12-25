import { ComponentMeta } from '@storybook/react';
import { QueryErrorResetBoundary, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { rest } from 'msw';

import { QueryErrorBoundary } from '.';

const Component = () => {
  const { data } = useQuery({
    queryKey: ['key'],
    queryFn: () => axios.get('/some'),
    suspense: true,
  });

  return <p>data:{JSON.stringify(data)}</p>;
};

export default {
  component: QueryErrorBoundary,
  args: {
    children: Component,
  },
  msw: {
    handlers: [
      rest.get('/some', (req, res, ctx) => {
        return res(ctx.status(400));
      }),
    ],
  },
  decorators: [],
} as ComponentMeta<typeof QueryErrorResetBoundary>;

export const Default = {};
