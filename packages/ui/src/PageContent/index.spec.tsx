import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('PageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Default>
        <span>content</span>
      </Default>
    );
    expect(baseElement).toBeTruthy();
  });
});
