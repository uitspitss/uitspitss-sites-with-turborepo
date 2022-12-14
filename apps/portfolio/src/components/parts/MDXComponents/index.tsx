import {
  Heading,
  HeadingProps,
  ListItem,
  ListItemProps,
  ListProps,
  UnorderedList,
  Box,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import Image, { ImageProps } from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

type MDXComponentsType = ComponentPropsWithoutRef<
  typeof MDXProvider
>['components'];

type IframeProps = ComponentPropsWithoutRef<'iframe'>;

// NOTE: MDXProvider の props にそのまま渡せるように
// components としてまとめて export するので、各 component の命名に注意

export const img = (props: ImageProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image layout="responsive" {...props} />
);

export const h1 = (props: HeadingProps) => (
  <Heading size="md" as="h3" py={{ base: '4', md: '6' }} {...props} />
);

export const h2 = (props: HeadingProps) => (
  <Heading size="sm" as="h4" py={{ base: '4', md: '6' }} {...props} />
);

export const h3 = (props: HeadingProps) => (
  <Heading size="xs" as="h5" py={{ base: '4', md: '6' }} {...props} />
);

export const ul = (props: ListProps) => <UnorderedList {...props} />;

export const li = (props: ListItemProps) => <ListItem {...props} />;

export const iframe = (props: IframeProps) => (
  <Box my={{ base: '4', md: '6' }}>
    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
    <iframe {...props} />
  </Box>
);

const components = {
  img,
  h1,
  h2,
  h3,
  ul,
  li,
  iframe,
} as MDXComponentsType;

export default components;
