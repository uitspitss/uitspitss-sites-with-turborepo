import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { MainLayout } from '.';

export default {
  component: MainLayout,
  title: 'MainLayout',
  args: {
    children: <span>children</span>,
  },
} as ComponentMeta<typeof MainLayout>;

export const Default = {};
