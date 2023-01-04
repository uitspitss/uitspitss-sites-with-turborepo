import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { GameWithSongsEntity } from '@/lib/api/@types';

const schema = z.object({
  name: z.string(),
});

export type FormData = z.infer<typeof schema>;

type Props = {
  game: GameWithSongsEntity;
  onSubmit: (data: FormData) => Promise<void>;
};

export const GameUpdateForm = ({ game, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: game.name,
    },
  });

  const onValid = useCallback(
    async (data: FormData) => {
      await onSubmit(data);
    },
    [onSubmit],
  );

  return (
    <Container minW={{ base: 'xs', sm: 'sm', md: 'md' }} maxW="lg">
      <form onSubmit={handleSubmit(onValid)} noValidate>
        <Box
          bg="bg-surface"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          borderRadius="lg"
        >
          <Stack
            spacing="5"
            px={{ base: '4', md: '6' }}
            py={{ base: '5', md: '6' }}
            divider={<StackDivider />}
          >
            <FormControl isRequired isInvalid={errors.name && dirtyFields.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" {...register('name')} />
              {errors.name?.message && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
          </Stack>
          <Divider />
          <Flex direction="row-reverse" py="4" px={{ base: '4', md: '6' }}>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>
              Save
            </Button>
          </Flex>
        </Box>
      </form>
    </Container>
  );
};
