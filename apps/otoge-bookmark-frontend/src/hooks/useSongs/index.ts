import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';

export const useSongs = () => {
  const api = useApi();

  const { data: songs } = useQuery({
    queryKey: [api.songs.$path()],
    queryFn: () => api.songs.$get(),
    suspense: process.env.NODE_ENV !== 'test',
  });

  return { songs };
};
