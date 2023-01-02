import { renderHook, waitFor } from '@testing-library/react';
import { useApi } from '.';

test('should not be null', async () => {
  const { result } = renderHook(() => useApi());

  await waitFor(() => {
    expect(result.current).not.toBe(null);
  });
});
