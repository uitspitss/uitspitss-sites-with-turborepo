import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';

export const GameCreateForm = (props: BoxProps) => (
  <Box
    as="form"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  >
    <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input defaultValue="Game Name" />
      </FormControl>
    </Stack>
    <Divider />
    <Flex direction="row-reverse" py="4" px={{ base: '4', md: '6' }}>
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Flex>
  </Box>
);
