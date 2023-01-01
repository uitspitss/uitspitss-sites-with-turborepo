import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';

export const useGames = () => {
  const { api, isLoading } = useApi();

  const { data: games } = useQuery({
    queryKey: [api.games.$path()],
    queryFn: () => api.games.$get(),
    enabled: !isLoading,
    // suspense: process.env.NODE_ENV !== 'test',
  });

  return { games };
};
