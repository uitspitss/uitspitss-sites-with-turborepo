import { MDXProvider } from '@mdx-js/react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { type ReactElement } from 'react';

import { PageHeader, PageContent } from 'ui';
import { MainLayout } from '@/components/layouts/MainLayout';
import components from '@/components/parts/MDXComponents';
import Jobs from '@/contents/mdx/jobs.mdx';
import { NextPageWithLayout } from '@/types/page';

type PageProps = unknown;

const Page: NextPageWithLayout<PageProps> = (_props) => {
  const { t } = useTranslation('common');

  return (
    <>
      <PageHeader title={t('Jobs')} />
      <PageContent>
        <MDXProvider components={components}>
          <Jobs />
        </MDXProvider>
      </PageContent>
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
