import { render } from '@testing-library/react';

import { PageContent } from './index';

describe('PageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageContent>
        <span>content</span>
      </PageContent>
    );
    expect(baseElement).toBeTruthy();
  });
});
