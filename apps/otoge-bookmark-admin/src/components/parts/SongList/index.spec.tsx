import { composeStories } from '@storybook/testing-react';
import { render, waitFor } from '@testing-library/react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('SongList', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Default />);

    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });
});
