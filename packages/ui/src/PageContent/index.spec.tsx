import { render } from '@testing-library/react';

import { PageContent } from './index';

describe('PageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageContent>content</PageContent>);
    expect(baseElement).toBeTruthy();
  });
});
