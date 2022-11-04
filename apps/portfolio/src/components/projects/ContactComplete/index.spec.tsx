import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import React, { type ReactNode } from 'react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
  Trans: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe('ContactComplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});
