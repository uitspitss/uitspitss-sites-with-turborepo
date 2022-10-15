import { Box, Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

type PageContentProps = {
  children: ReactElement;
};

export const PageContent = (props: PageContentProps) => {
  const { children } = props;

  return (
    <Container
      centerContent
      px={{ base: '16', md: '24' }}
      py={{ base: '16', md: '24' }}
    >
      <Box>{children}</Box>
    </Container>
  );
};
