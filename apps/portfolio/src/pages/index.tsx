import { MDXProvider } from '@mdx-js/react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import { PageHeader, PageContent } from 'ui';
import { MainLayout } from '../components/layouts/MainLayout';
import components from '../components/parts/MDXComponents';
import AboutMe from '../contents/mdx/about-me.mdx';

type PageProps = {};

const Page = (_props: PageProps) => {
  const { t } = useTranslation('common');

  return (
    <MainLayout>
      <>
        <PageHeader title={t('About Me')} />
        <PageContent>
          <MDXProvider components={components}>
            <AboutMe />
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
