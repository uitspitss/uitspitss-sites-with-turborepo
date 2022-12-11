import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '@/test-utils/react-query';
import { useGames } from '.';

test('should not be null', async () => {
  const { result } = renderHook(() => useGames(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => {
    expect(result.current).not.toBeNull();
  });
});
