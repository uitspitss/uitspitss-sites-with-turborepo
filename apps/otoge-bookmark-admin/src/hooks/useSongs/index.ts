import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';

export const useSongs = () => {
  const { api, isLoading } = useApi();

  const { data: songs } = useQuery({
    queryKey: [api.songs.$path()],
    queryFn: () => api.songs.$get(),
    enabled: !isLoading,
    // suspense: process.env.NODE_ENV !== 'test',
  });

  return { songs };
};
