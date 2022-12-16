import { ComponentMeta } from '@storybook/react';

import { UserProfile } from '.';

export default {
  component: UserProfile,
  args: {
    name: 'name',
    email: 'email@example.com',
    image: 'img',
  },
} as ComponentMeta<typeof UserProfile>;

export const Default = {};
