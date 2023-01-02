import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

type Props = Omit<NextLinkProps, 'as'> & { children: ReactNode };

export const Link = ({ children, ...props }: Props) => (
  // @ts-expect-error override chakra link component
  <ChakraLink as={NextLink} {...props}>
    {children}
  </ChakraLink>
);
