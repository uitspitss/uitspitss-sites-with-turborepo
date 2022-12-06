import { Box, Container } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type PageContentProps = {
  children: ReactNode;
};

export const PageContent = (props: PageContentProps) => {
  const { children } = props;

  return (
    <Container
      centerContent
      px={{ base: 0, md: '24' }}
      py={{ base: 8, md: '24' }}
    >
      <Box>{children}</Box>
    </Container>
  );
};
