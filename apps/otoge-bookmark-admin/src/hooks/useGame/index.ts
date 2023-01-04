import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useApi } from '@/hooks/useApi';
import { UpdateGameDto } from '@/lib/api/@types';

export const useGame = (gameId: string) => {
  const { api, isLoading } = useApi();
  const queryClient = useQueryClient();
  const queryKey = api.games._id(gameId).$path();

  const { data: game } = useQuery({
    queryKey: [queryKey],
    queryFn: () => api.games._id(gameId).$get(),
    enabled: !isLoading && !!gameId,
    // suspense: process.env.NODE_ENV !== 'test',
  });

  const { mutateAsync: update } = useMutation({
    mutationFn: async (data: UpdateGameDto) => {
      return await api.games._id(gameId).$patch({ body: data });
    },
    onSuccess: async () => {
      queryClient.invalidateQueries([queryKey]);
    },
    onError: async () => {
      throw new Error('failed to update game');
    },
  });

  return { game, update };
};
