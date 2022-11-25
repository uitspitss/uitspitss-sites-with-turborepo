import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';

export const useGames = () => {
  const api = useApi();

  const { data: games } = useQuery({
    queryKey: [api?.games.$path()],
    queryFn: () => api?.games.$get(),
  });

  return { games };
};
