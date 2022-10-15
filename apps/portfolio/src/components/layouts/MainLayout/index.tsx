import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactElement, useMemo } from 'react';
import { Footer, Navbar } from 'ui';
import { Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const pageList = [
  { name: 'about', path: '/' },
  { name: 'jobs', path: '/jobs' },
  { name: 'works', path: '/works' },
  { name: 'contact', path: '/contact' },
];

type MainLayoutProps = {
  children: ReactElement;
};

const StyledMainLayout = styled.div``;

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const router = useRouter();
  const selectedIndex = useMemo(
    () => pageList.map((v) => v.path).indexOf(router.asPath),
    [router]
  );

  const pageItems = useMemo(() => {
    return pageList.map((v) => ({
      name: v.name,
      wrapperFn: (component: ReactElement) => (
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
