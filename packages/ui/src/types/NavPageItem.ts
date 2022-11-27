import type { As } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export type NavPageItem = {
  name: string;
  // Next.js 依存にしないために render func を受ける
  wrapperFn?: (component: ReactNode) => JSX.Element;
  icon?: As;
};
