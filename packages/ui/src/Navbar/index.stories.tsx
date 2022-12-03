import { ComponentMeta } from '@storybook/react';
import { FiHome } from 'react-icons/fi';

import { Navbar } from '.';

export default {
  component: Navbar,
  args: {
    pageItems: [
      { name: 'home', path: '/home', icon: FiHome },
      { name: 'about', path: '/about' },
    ],
  },
  argTypes: {
    changeLocale: { action: 'clicked changeLocale' },
  },
} as ComponentMeta<typeof Navbar>;

export const Default = {};

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
