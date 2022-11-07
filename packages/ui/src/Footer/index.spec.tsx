import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});
