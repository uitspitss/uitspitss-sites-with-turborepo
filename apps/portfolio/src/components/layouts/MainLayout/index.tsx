import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode, useCallback, useMemo } from 'react';
import { Container } from '@chakra-ui/react';
import { Footer, Navbar } from 'ui';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FiInfo, FiMail } from 'react-icons/fi';
import { MdWorkOutline } from 'react-icons/md';
import { HiOutlineTemplate } from 'react-icons/hi';
import { pagesPath } from '@/lib/$path';

type MainLayoutProps = {
  children: ReactNode;
};

const StyledMainLayout = styled.div``;

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;
  const { t } = useTranslation('common');

  const pageList = useMemo(
    () =>
      t
        ? [
            {
              name: t('about me'),
              path: pagesPath.$url().pathname,
              icon: FiInfo,
            },
            {
              name: t('jobs'),
              path: pagesPath.jobs.$url().pathname,
              icon: MdWorkOutline,
            },
            {
              name: t('works'),
              path: pagesPath.works.$url().pathname,
              icon: HiOutlineTemplate,
            },
            {
              name: t('contact'),
              path: pagesPath.contact.$url().pathname,
              icon: FiMail,
            },
          ]
        : [],
    [t],
  );

  const selectedIndex = useMemo(
    () =>
      pageList
        .map((v) => v.path)
        .indexOf(asPath as '/' | '/jobs' | '/works' | '/contact'),
    [asPath, pageList],
  );

  const pageItems = useMemo(() => {
    return pageList.map((v) => ({
      name: v.name,
      wrapperFn: (component: ReactNode) => (
        <Link href={v.path} key={v.path} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          {component}
        </Link>
      ),
      icon: v.icon,
      test: 'test',
    }));
  }, [pageList]);

  const changeLocale = useCallback(() => {
    if (locale === 'en') {
      router.push({ pathname, query }, asPath, { locale: 'ja' });
    } else {
      router.push({ pathname, query }, asPath, { locale: 'en' });
    }
  }, [router, pathname, query, asPath, locale]);

  return (
    <StyledMainLayout>
      <Navbar
        pageItems={pageItems}
        locale={router.locale ?? 'en'}
        selectedIndex={selectedIndex}
        changeLocale={changeLocale}
      />
      <Container py={{ base: 0, md: 8 }}>{children}</Container>
      <Footer />
    </StyledMainLayout>
  );
};
