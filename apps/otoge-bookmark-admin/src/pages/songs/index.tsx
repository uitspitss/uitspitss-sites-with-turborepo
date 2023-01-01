import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Box, Center, SkeletonText } from '@chakra-ui/react';
import Head from 'next/head';
import { Suspense } from 'react';
import { PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import { SongList } from '@/components/parts/SongList';
import { NextPageWithLayout } from '@/types/page';

const PAGE_TITLE = 'Songs';
type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE} | Otoge Bookmark Admin</title>
      </Head>
      <MainLayout pageTitle={PAGE_TITLE}>
        <PageContent>
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
    </>
  );
};

export default withAuthenticationRequired(Page);
