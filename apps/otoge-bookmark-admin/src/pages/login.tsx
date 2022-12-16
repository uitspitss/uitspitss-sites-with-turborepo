import {
  Button,
  Container,
  Heading,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Logo } from 'ui';

const Page = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
          Log in to your account
        </Heading>
      </Stack>
      <Stack spacing="6">
        <Button variant="secondary" leftIcon={<FcGoogle />} iconSpacing="3">
          Continue with Google
        </Button>
      </Stack>
    </Stack>
  </Container>
);

export default Page;
