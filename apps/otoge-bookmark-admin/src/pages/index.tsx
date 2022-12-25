import { Box, Center, SkeletonText } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { ReactElement, Suspense } from 'react';
import { PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import { GameList } from '@/components/parts/GameList';
import { SongList } from '@/components/parts/SongList';
import { AuthProvider } from '@/providers/AuthProvider';
import { NextPageWithLayout } from '@/types/page';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  return (
    <>
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
          <SongList />
        </Suspense>
      </PageContent>
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <AuthProvider>
    <MainLayout pageTitle="Main">{page}</MainLayout>
  </AuthProvider>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'ui'])),
  },
});

export default Page;
