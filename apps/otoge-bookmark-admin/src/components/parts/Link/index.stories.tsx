import { ComponentMeta } from '@storybook/react';

import { Link } from '.';

export default {
  component: Link,
  args: {
    children: <span>link text</span>,
    href: '/',
  },
} as ComponentMeta<typeof Link>;

export const Default = {};
