import { render } from '@testing-library/react';

import { GameCreateForm } from '.';

describe('GameCreateForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameCreateForm />);
    expect(baseElement).toBeTruthy();
  });
});
