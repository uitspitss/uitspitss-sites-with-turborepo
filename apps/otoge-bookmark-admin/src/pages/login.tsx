import { Button, Heading, Stack, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';
import { Logo, PageContent } from 'ui';

const Page = () => (
  <>
    <Head>
      <title>Login | Otoge Bookmark</title>
    </Head>
    <PageContent>
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
    </PageContent>
  </>
);

export default Page;
