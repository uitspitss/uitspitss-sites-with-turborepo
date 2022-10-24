import { ComponentMeta } from '@storybook/react';
import { ContactComplete } from '.';

export default {
  component: ContactComplete,
  title: 'ContactComplete',
  args: { t: (str: string) => str },
} as ComponentMeta<typeof ContactComplete>;

export const Default = {};
