import { ComponentMeta } from '@storybook/react';

import { PageContent } from '.';

export default {
  component: PageContent,
  args: {
    children: <span>content</span>,
  },
} as ComponentMeta<typeof PageContent>;

export const Default = {};
