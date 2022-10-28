import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import React from 'react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Button', () => {
  const onClick = jest.fn();

  it('should render successfully', () => {
    // @ts-expect-error test
    const { baseElement } = render(<Default onClick={onClick} />);
    expect(baseElement).toBeTruthy();
  });

  it('clicked', async () => {
    // @ts-expect-error test
    const { container } = render(<Default onClick={onClick} />);

    await Default.play({ canvasElement: container });

    expect(onClick).toBeCalledTimes(1);
  });
});
