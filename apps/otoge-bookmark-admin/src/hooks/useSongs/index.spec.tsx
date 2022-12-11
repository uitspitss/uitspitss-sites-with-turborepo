import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '@/test-utils/react-query';
import { useSongs } from '.';

test('should not be null', async () => {
  const { result } = renderHook(() => useSongs(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => {
    expect(result.current).not.toBeNull();
  });
});
