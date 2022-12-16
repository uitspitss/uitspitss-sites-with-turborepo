import { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

/* eslint-disable-next-line */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<
  PageTransitionEvent,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
