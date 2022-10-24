import { ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { ContactForm } from '.';

export default {
  title: 'ContactForm',
  component: ContactForm,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
} as ComponentMeta<typeof ContactForm>;

export const Default = {};

export const Valid = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByLabelText(/email address/), 'mail@example.com');
    userEvent.type(canvas.getByLabelText(/name/), 'John Smith');
    userEvent.type(canvas.getByLabelText(/subject/), 'for business');
    userEvent.type(canvas.getByLabelText(/message/), '1234567890');

    userEvent.click(canvas.getByRole('button', { name: 'submit' }));
  },
};

export const Invalid = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByLabelText(/email address/), 'mail');
    userEvent.type(canvas.getByLabelText(/name/), 'John Smith');
    userEvent.type(canvas.getByLabelText(/subject/), 'for business');
    userEvent.type(canvas.getByLabelText(/message/), '123');

    userEvent.click(canvas.getByRole('button', { name: 'submit' }));
  },
};
