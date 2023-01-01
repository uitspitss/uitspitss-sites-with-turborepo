import { AppState, Auth0Provider } from '@auth0/auth0-react';
import Router from 'next/router';
import { ReactNode } from 'react';

const DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState?: AppState) => {
  Router.replace(appState?.returnTo || '/');
};

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => (
  <Auth0Provider
    domain={`${DOMAIN}`}
    clientId={`${CLIENT_ID}`}
    redirectUri={
      typeof window !== 'undefined' ? window.location.origin : undefined
    }
    onRedirectCallback={onRedirectCallback}
  >
    {children}
  </Auth0Provider>
);
