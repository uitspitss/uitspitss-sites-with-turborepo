import { ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { ContactForm } from '.';

export default {
  title: 'ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

export const Default = {
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export const Valid = {
  ...Default,
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
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByLabelText(/email address/), 'mail');
    userEvent.type(canvas.getByLabelText(/name/), 'John Smith');
    userEvent.type(canvas.getByLabelText(/subject/), 'for business');
    userEvent.type(canvas.getByLabelText(/message/), '123');

    userEvent.click(canvas.getByRole('button', { name: 'submit' }));
  },
};
