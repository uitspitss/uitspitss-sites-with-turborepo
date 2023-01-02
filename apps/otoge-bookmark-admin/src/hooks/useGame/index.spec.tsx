import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '@/test-utils/react-query';
import { useGame } from '.';

test('should not be null', async () => {
  const { result } = renderHook(() => useGame('game-1'), {
    wrapper: createWrapper(),
  });

  await waitFor(() => {
    expect(result.current).not.toBeNull();
  });
});
