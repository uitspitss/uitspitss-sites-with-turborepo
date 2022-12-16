import {
  Container,
  Flex,
  Heading,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Sidebar } from '@/components/parts/Sidebar';

type MainLayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children, pageTitle } = props;

  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      <Sidebar />
      <Container py="8" flex="1">
        <Stack spacing={{ base: '8', lg: '6' }}>
          <Stack
            spacing="4"
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
            align={{ base: 'start', lg: 'center' }}
          >
            <Stack spacing="1">
              <Heading
                size={useBreakpointValue({ base: 'xs', lg: 'sm' })}
                fontWeight="medium"
              >
                {pageTitle}
              </Heading>
            </Stack>
          </Stack>
          {children}
        </Stack>
      </Container>
    </Flex>
  );
};
