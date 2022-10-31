import { ContactForm, PageContent, PageHeader } from 'ui';
import { MainLayout } from '../../components/layouts/MainLayout';
import { ContactComplete } from '../../components/projects/ContactComplete';
import { ComponentProps, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

type SubmitHandler = ComponentProps<typeof ContactForm>['onSubmit'];

/* eslint-disable-next-line */
export type PageProps = {};

export const Page = (_props: PageProps) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const onSubmit: SubmitHandler = async (data) => {
    try {
      const res = await fetch('/api/send', {
        body: JSON.stringify({ ...data, locale }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (res.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error(res.status, res.body);
        toast({
          title: t('sending error'),
          description: t('sending error'),
          position: 'top-right',
          status: 'error',
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: t('sending error'),
        description: t('sending error'),
        position: 'top-right',
        status: 'error',
      });
    }
  };

  return (
    <MainLayout>
      <>
        <PageHeader title={t('Contact')} />
        <PageContent>
          {isSubmitted ? (
            <ContactComplete />
          ) : (
            <ContactForm onSubmit={onSubmit} />
          )}
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
