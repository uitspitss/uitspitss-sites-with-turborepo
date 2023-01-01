import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, Center, SkeletonText } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement, Suspense } from 'react';
import { PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import { GameList } from '@/components/parts/GameList';
import { SongList } from '@/components/parts/SongList';
import { NextPageWithLayout } from '@/types/page';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Search | Otoge Bookmark</title>
      </Head>
      <PageContent>
        username: {user?.name}
        <Suspense
          fallback={
            <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            </Center>
          }
        >
          <GameList />
        </Suspense>
        <Suspense
          fallback={
            <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
              <Box minW="sm" padding="6" boxShadow="lg" bg="white">
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            </Center>
          }
        >
          <SongList />
        </Suspense>
      </PageContent>
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <MainLayout pageTitle="Main">{page}</MainLayout>
);

export default Page;
