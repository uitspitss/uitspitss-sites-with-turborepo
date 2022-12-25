import { useAuth0 } from '@auth0/auth0-react';
import { Button, Heading, Stack, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Logo, PageContent } from 'ui';
import { AuthProvider } from '@/providers/AuthProvider';

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
              variant="secondary"
              leftIcon={<FcGoogle />}
              iconSpacing="3"
            >
              Continue with Google
            </Button>
          </Stack>
        </Stack>
      </PageContent>
    </>
  );
};

Page.getLayout = (page: ReactElement) => <AuthProvider>{page}</AuthProvider>;

export default Page;
