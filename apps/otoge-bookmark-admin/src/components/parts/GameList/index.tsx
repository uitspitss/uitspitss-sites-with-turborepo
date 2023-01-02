import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Link } from '@/components/parts/Link';
import { useGames } from '@/hooks/useGames';
import { pagesPath } from '@/lib/$path';

type GameListProps = unknown;

export const GameList = (_props: GameListProps) => {
  const { games } = useGames();

  return (
    <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
      <Box bg="bg-surface" py="4" minW="sm">
        <Stack divider={<StackDivider />} spacing="4">
          {games?.map((game) => (
            <Stack key={game.id} fontSize="sm" px="4" spacing="4">
              <Stack direction="row" justify="space-between" spacing="4">
                <Box>
                  <Link href={pagesPath.games._gameId(game.id).edit.$url()}>
                    <Text fontWeight="medium" fontSize="2xl" color="emphasized">
                      {game.name}
                    </Text>
                  </Link>
                </Box>
              </Stack>
              <Text
                color="muted"
                sx={{
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '2',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }}
              >
                {game.songs.map((s) => s.name).join(' / ')}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Center>
  );
};
