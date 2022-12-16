import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('GameList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });

  it('show 3 items', async () => {
    render(<Default />);

    await waitFor(() => {
      expect(screen.getByText('Game 1')).toBeInTheDocument();
      expect(screen.getByText('Game 2')).toBeInTheDocument();
      expect(screen.getByText('Game 3')).toBeInTheDocument();
    });
  });
});
