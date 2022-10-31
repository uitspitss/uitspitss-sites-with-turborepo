import { MDXProvider } from '@mdx-js/react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader, PageContent } from 'ui';
import { MainLayout } from '../components/layouts/MainLayout';
import components from '../components/parts/MDXComponents';
import Jobs from '../contents/mdx/jobs.mdx';

type PageProps = unknown;

const Page = (_props: PageProps) => {
  const { t } = useTranslation('common');

  return (
    <MainLayout>
      <>
        <PageHeader title={t('Jobs')} />
        <PageContent>
          {/* @ts-expect-error components prop */}
          <MDXProvider components={components}>
            <Jobs />
          </MDXProvider>
        </PageContent>
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'ui'])),
  },
});

export default Page;
