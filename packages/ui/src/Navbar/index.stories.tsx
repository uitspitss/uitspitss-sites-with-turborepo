import { ComponentMeta } from '@storybook/react';

import { Navbar } from '.';

export default {
  component: Navbar,
  title: 'Navbars',
} as ComponentMeta<typeof Navbar>;

export const Default = {
  args: {
    pageItems: [
      { name: 'home', path: '/home' },
      { name: 'about', path: '/about' },
    ],
  },
};
