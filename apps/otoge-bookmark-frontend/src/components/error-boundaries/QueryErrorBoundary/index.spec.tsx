import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('QueryErrorBoundary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Default>
        <span>children</span>
      </Default>,
    );
    expect(baseElement).toBeTruthy();
  });
});
