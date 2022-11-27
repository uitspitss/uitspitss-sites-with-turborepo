import { ComponentMeta } from '@storybook/react';

import { SiteSettings } from '.';

export default {
  component: SiteSettings,
  title: 'SiteSettings',
  argTypes: {
    changeLocale: { action: 'clicked changeLocale' },
  },
} as ComponentMeta<typeof SiteSettings>;

export const Default = {
  args: {},
};
