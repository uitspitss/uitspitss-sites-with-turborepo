import { ComponentMeta } from '@storybook/react';

import { MainLayout } from '.';

export default {
  component: MainLayout,
  args: {
    children: <span>children</span>,
    pageTitle: 'Page Title',
  },
} as ComponentMeta<typeof MainLayout>;

export const Default = {};
