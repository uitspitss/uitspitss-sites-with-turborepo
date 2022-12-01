import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react';
import type { GameEntity } from '@/lib/api/@types';

type GameListProps = {
  games: GameEntity[];
};

export const GameList = (props: GameListProps) => {
  const { games } = props;

  return (
    <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
      <Box bg="bg-surface" py="4">
        <Stack divider={<StackDivider />} spacing="4">
          {games.map((game) => (
            <Stack key={game.id} fontSize="sm" px="4" spacing="4">
              <Stack direction="row" justify="space-between" spacing="4">
                <Box>
                  <Text fontWeight="medium" fontSize="2xl" color="emphasized">
                    {game.title}
                  </Text>
                </Box>
              </Stack>
              <Text
                color="muted"
                sx={{
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '2',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }}
              >
                TODO: song list
                <br /> Candy donut tart pudding macaroon. Soufflé carrot cake
                choc late
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Center>
  );
};
