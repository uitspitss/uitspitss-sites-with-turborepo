import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import React from 'react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Navbars', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});
