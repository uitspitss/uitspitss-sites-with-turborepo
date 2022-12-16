import { renderHook } from '@testing-library/react';
import { useApi } from '.';

test('should not be null', () => {
  const { result } = renderHook(() => useApi());

  expect(result.current).not.toBe(null);
});
