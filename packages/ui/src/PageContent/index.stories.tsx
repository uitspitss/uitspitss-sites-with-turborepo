import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { PageContent } from '.';

export default {
  component: PageContent,
  title: 'PageContent',
  args: {
    children: <span>content</span>,
  },
} as ComponentMeta<typeof PageContent>;

export const Default = {};
