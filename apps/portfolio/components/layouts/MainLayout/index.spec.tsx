import { render } from '@testing-library/react';

import { MainLayout } from '.';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('MainLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainLayout>children</MainLayout>);
    expect(baseElement).toBeTruthy();
  });
});
