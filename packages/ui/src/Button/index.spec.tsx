import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Button', () => {
  const onClick = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(<Default onClick={onClick} />);
    expect(baseElement).toBeTruthy();
  });

  it('clicked', async () => {
    const { container } = render(<Default onClick={onClick} />);

    await Default.play({ canvasElement: container });

    expect(onClick).toBeCalledTimes(1);
  });
});
