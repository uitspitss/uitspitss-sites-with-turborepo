import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { ReactElement } from 'react';
import { useGames } from '.';

test('should not be null', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: ReactElement }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => useGames(), {
    wrapper,
  });

  expect(result.current).not.toBe(null);
});