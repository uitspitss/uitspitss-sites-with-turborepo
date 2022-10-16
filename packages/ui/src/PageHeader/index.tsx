import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

type PageHeaderProps = {
  title: ReactNode;
  subtitle?: ReactElement;
};

export const PageHeader = (props: PageHeaderProps) => {
  const { title, subtitle } = props;

  return (
    <Box as="section" bg="bg-surface" py={{ base: '16', md: '24' }}>
      <Container>
        <Stack
          spacing={{ base: '4', md: '6' }}
          align="center"
          textAlign="center"
        >
          <Stack spacing="3">
            <Heading
              size={useBreakpointValue({ base: 'md', md: 'lg' })}
              fontWeight="semibold"
              as="h1"
            >
              {title}
            </Heading>
            {subtitle && (
              <Text
                color="muted"
                fontSize={{ base: 'lg', md: 'xl' }}
                maxW="3xl"
              >
                {subtitle}
              </Text>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
