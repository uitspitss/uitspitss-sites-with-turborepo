import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => (
  <UserProvider>{children}</UserProvider>
);
