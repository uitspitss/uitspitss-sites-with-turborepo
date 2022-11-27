import { ComponentMeta } from '@storybook/react';

import { Sidebar } from '.';

export default {
  component: Sidebar,
  title: 'Sidebar',
  args: {
    pageItems: [
      { name: 'home', path: '/home' },
      { name: 'about', path: '/about' },
    ],
  },
  argTypes: {
    changeLocale: { action: 'clicked changeLocale' },
  },
} as ComponentMeta<typeof Sidebar>;

export const Default = {
  args: {},
};
