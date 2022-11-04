import { render } from '@testing-library/react';
import React from 'react';

import { Logo } from '.';

describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });
});
