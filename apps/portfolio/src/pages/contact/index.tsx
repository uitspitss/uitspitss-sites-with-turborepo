import { ContactForm, PageContent, PageHeader } from 'ui';
import { MainLayout } from '../../components/layouts/MainLayout';
import { ContactComplete } from '../../components/projects/ContactComplete';
import React, { ComponentProps, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

type SubmitHandler = ComponentProps<typeof ContactForm>['onSubmit'];

/* eslint-disable-next-line */
export type ContactProps = {};

export const Contact = (_props: ContactProps) => {
  const { t } = useTranslation();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler = async (data) => {
    try {
      const res = await fetch('/api/send', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (res.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error(res.status, res.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <>
        <PageHeader title="Contact" />
        <PageContent>
          {isSubmitted ? (
            <ContactComplete />
          ) : (
            <ContactForm onSubmit={onSubmit} t={t} />
          )}
        </PageContent>
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Contact;
