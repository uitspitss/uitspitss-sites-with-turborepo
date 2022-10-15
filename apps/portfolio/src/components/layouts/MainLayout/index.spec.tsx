import { render } from '@testing-library/react';
import React from 'react';

import { MainLayout } from '.';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('MainLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MainLayout>
        <span>children</span>
      </MainLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
