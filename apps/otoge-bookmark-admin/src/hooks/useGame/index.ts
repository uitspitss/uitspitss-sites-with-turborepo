import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';

export const useGame = (id: string) => {
  const { api, isLoading } = useApi();

  const { data: game } = useQuery({
    queryKey: [api.games._id(id).$path()],
    queryFn: () => api.games._id(id).$get(),
    enabled: !isLoading,
    // suspense: process.env.NODE_ENV !== 'test',
  });

  return { game };
};
