import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';

export const useSongs = () => {
  const api = useApi();

  const { data: songs } = useQuery({
    queryKey: ['songs'],
    queryFn: () => api?.songs.$get(),
  });

  return { songs };
};
