import { ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
  args: { children: 'button' },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

export const Default = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByRole('button', { name: 'button' }));
  },
};
