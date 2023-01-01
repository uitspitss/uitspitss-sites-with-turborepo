import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Box, Center, SkeletonText } from '@chakra-ui/react';
import Head from 'next/head';
import { Suspense } from 'react';
import { PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import { GameList } from '@/components/parts/GameList';
import { SongList } from '@/components/parts/SongList';
import { NextPageWithLayout } from '@/types/page';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  return (
    <MainLayout pageTitle="Main">
      <Head>
        <title>Search | Otoge Bookmark</title>
      </Head>
      <PageContent>
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
    </MainLayout>
  );
};

export default withAuthenticationRequired(Page);
