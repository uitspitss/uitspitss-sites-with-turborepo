import { ComponentMeta } from '@storybook/react';
import { PageContent } from '.';

export default {
  component: PageContent,
  title: 'PageContent',
} as ComponentMeta<typeof PageContent>;

export const Default = {
  args: { children: 'content' },
};
