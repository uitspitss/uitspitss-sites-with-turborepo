import { GetServerSideProps } from 'next';
import { type ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/page';
import Head from 'next/head';
import { useGames } from '@/hooks/useGames';
import { useSongs } from '@/hooks/useSongs';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  const { games } = useGames();
  console.log(`🚧 | file: index.tsx | line 16 | games`, games);
  const { songs } = useSongs();
  console.log(`🚧 | file: index.tsx | line 18 | songs`, songs);

  return (
    <>
      <Head>
        <title>Search | Otoge Bookmark</title>
      </Head>
      <PageContent>test</PageContent>
    </>
  );
};

Page.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'ui'])),
  },
});

export default Page;
