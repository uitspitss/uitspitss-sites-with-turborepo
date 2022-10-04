import { ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

export const Default = {
  args: { children: 'button' },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole('button', { name: 'button' }));
  },
};
