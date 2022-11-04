import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import React from 'react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('PageHeader', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    jest.mock('@chakra-ui/media-query', () => ({
      useBreakpointValue: () => 2,
    }));
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});
