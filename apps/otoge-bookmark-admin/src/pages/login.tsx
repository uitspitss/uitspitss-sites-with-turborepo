import { useAuth0 } from '@auth0/auth0-react';
import { Button, Heading, Stack, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import { Logo, PageContent } from 'ui';

const Page = () => {
  const { loginWithRedirect } = useAuth0();

  return (
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
            <Button
              onClick={loginWithRedirect}
              type="button"
              variant="secondary"
              iconSpacing="3"
            >
              Continue with Auth0
            </Button>
          </Stack>
        </Stack>
      </PageContent>
    </>
  );
};

export default Page;
