import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode, useMemo } from 'react';

const DOMAIN = `${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`;
const CLIENT_ID = `${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`;

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const redirectUri = useMemo(() => {
    if (typeof window === 'undefined') {
      return '/';
    }

    return window.location.origin;
  }, []);

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};
