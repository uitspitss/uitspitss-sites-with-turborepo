import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});
