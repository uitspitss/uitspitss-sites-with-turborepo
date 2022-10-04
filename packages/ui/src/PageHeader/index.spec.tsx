import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as mediaQueryHooks from '@chakra-ui/media-query';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('PageHeader', () => {
  beforeAll(() => {
    jest
      .spyOn(mediaQueryHooks, 'useBreakpointValue')
      .mockImplementationOnce(() => 2);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});
