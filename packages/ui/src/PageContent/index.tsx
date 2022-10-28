import { Box, Container, type ContainerProps } from '@chakra-ui/react';

type PageContentProps = {
  children: ContainerProps['children'];
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
