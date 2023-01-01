import {
  Box,
  Center,
  Stack,
  StackDivider,
  Text,
  Wrap,
  Tag,
  WrapItem,
} from '@chakra-ui/react';
import { useSongs } from '@/hooks/useSongs';

type SongListProps = unknown;

export const SongList = (_props: SongListProps) => {
  const { songs } = useSongs();

  return (
    <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
      <Box bg="bg-surface" py="4" minW="sm">
        <Stack divider={<StackDivider />} spacing="4">
          {songs?.map((song) => (
            <Stack key={song.id} fontSize="sm" px="4" spacing="4">
              <Stack direction="row" justify="space-between" spacing="4">
                <Box>
                  <Text fontWeight="medium" fontSize="2xl" color="emphasized">
                    {song.name}
                  </Text>
                </Box>
                <Box>
                  <Text color="muted">{song.game.name}</Text>
                </Box>
              </Stack>
              <Wrap as={Box} spacing={2}>
                {song.categories.map((category) => (
                  <WrapItem key={category.id}>
                    <Tag size="sm" key={category.id} variant="solid">
                      {category.name}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Center>
  );
};
