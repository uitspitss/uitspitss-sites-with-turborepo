import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe('MainLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Default>
        <span>children</span>
      </Default>,
    );
    expect(baseElement).toBeTruthy();
  });
});