import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { Default, Valid, Invalid } = composeStories(stories);

describe('ContactForm', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Default />);

    expect(screen.getByLabelText(/email address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it('can submit with valid values', async () => {
    // @ts-expect-error test
    const { container } = render(<Valid onSubmit={onSubmit} />);

    await waitFor(() => {
      Valid.play({ canvasElement: container });
    });

    await waitForElementToBeRemoved(screen.getByText(/Loading.../));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'mail@example.com',
      name: 'John Smith',
      subject: 'for business',
      message: '1234567890',
    });
  });

  it("can't submit with invalid values", async () => {
    // @ts-expect-error test
    const { container } = render(<Invalid onSubmit={onSubmit} />);

    await waitFor(() => {
      Invalid.play({ canvasElement: container });
    });

    await waitForElementToBeRemoved(screen.getByText(/Loading.../));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(
      screen.getByText('String must contain at least 10 character(s)')
    ).toBeInTheDocument();
  });
});
