import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';

import ContactComplete from '.';

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
  Trans: jest.fn(),
}));

describe('ContactComplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactComplete />);
    expect(baseElement).toBeTruthy();
  });
});
