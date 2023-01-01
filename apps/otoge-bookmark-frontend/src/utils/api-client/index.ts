import aspida, { FetchConfig } from '@aspida/fetch';
import api from '@/lib/api/$api';

const fetchConfig: FetchConfig = {
  baseURL: process.env.API_URL,
};

export const generateClient = (accessToken: string) =>
  api(
    aspida(fetch, {
      ...fetchConfig,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  );
