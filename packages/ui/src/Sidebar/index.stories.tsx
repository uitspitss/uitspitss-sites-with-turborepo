import { ComponentMeta } from '@storybook/react';
import { FiHome } from 'react-icons/fi';

import { Sidebar } from '.';

export default {
  component: Sidebar,
  args: {
    pageItems: [
      { name: 'home', path: '/home', icon: FiHome },
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
