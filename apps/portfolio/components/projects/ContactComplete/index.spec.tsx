import { render } from '@testing-library/react';

import ContactComplete from '.';

describe('ContactComplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactComplete />);
    expect(baseElement).toBeTruthy();
  });
});
