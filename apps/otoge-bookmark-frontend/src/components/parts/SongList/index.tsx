import { useSongs } from '@/hooks/useSongs';
import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react';

type SongListProps = unknown;

export const SongList = (_props: SongListProps) => {
  const { songs } = useSongs();

  return (
    <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
      <Box bg="bg-surface" py="4">
        <Stack divider={<StackDivider />} spacing="4">
          {songs?.map((song) => (
            <Stack key={song.id} fontSize="sm" px="4" spacing="4">
              <Stack direction="row" justify="space-between" spacing="4">
                <Box>
                  <Text fontWeight="medium" fontSize="2xl" color="emphasized">
                    {song.title}
                  </Text>
                </Box>
                <Text color="muted">{song.game.title}</Text>
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
                TODO: song detail
                <br />
                Candy donut tart pudding macaroon. Soufflé carrot cake choc late
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Center>
  );
};