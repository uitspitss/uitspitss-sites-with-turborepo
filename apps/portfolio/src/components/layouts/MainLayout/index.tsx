import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode, useMemo } from 'react';
import { Footer, Navbar } from 'ui';
import { Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

type MainLayoutProps = {
  children: ReactNode;
};

const StyledMainLayout = styled.div``;

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const router = useRouter();
  const { t } = useTranslation('common');

  const pageList = useMemo(
    () =>
      t
        ? [
            { name: t('about me'), path: '/' },
            { name: t('jobs'), path: '/jobs' },
            { name: t('works'), path: '/works' },
            { name: t('contact'), path: '/contact' },
          ]
        : [],
    [t]
  );

  const selectedIndex = useMemo(
    () => pageList.map((v) => v.path).indexOf(router.asPath),
    [router]
  );

  const pageItems = useMemo(() => {
    return pageList.map((v) => ({
      name: v.name,
      wrapperFn: (component: ReactNode) => (
        <Link href={v.path} key={v.path}>
          <a>{component}</a>
        </Link>
      ),
    }));
  }, []);

  return (
    <StyledMainLayout>
      {/* @ts-expect-error TODO: fix type error */}
      <Navbar pageItems={pageItems} selectedIndex={selectedIndex} />
      <Container py={{ base: '8', md: '12' }}>{children}</Container>
      <Footer />
    </StyledMainLayout>
  );
};
