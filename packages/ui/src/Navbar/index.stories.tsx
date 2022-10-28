import { ComponentMeta } from '@storybook/react';

import { Navbar } from '.';

export default {
  component: Navbar,
  title: 'Navbars',
  args: {
    pageItems: [
      { name: 'home', path: '/home' },
      { name: 'about', path: '/about' },
    ],
  },
  argTypes: {
    changeLocale: { action: 'clicked changeLocale' },
  },
} as ComponentMeta<typeof Navbar>;

export const Default = {};
