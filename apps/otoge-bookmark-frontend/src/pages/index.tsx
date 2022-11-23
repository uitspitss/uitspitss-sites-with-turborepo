import { GetServerSideProps } from 'next';
import { type ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from '@/types/page';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  const { t } = useTranslation('common');

  return (
    <>
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
