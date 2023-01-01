import aspida from '@aspida/axios';
import { useAuth0 } from '@auth0/auth0-react';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { useEffect, useState } from 'react';
import api from '@/lib/api/$api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const baseConfig = {
  baseURL: API_URL,
};

const aspidaConfig: AxiosRequestConfig = {
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { indices: false }),
  },
};

const auth0Config = { audience: API_URL };

export const useApi = () => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const [accessToken, setAccessToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (typeof window === 'undefined') return;
      const token = await getAccessTokenSilently(auth0Config);

      // TODO: To fix "consent error" when localhost, but occurs "invalid state error"
      // const token =
      //   window.location.hostname === 'localhost'
      //     ? await getAccessTokenWithPopup(auth0Config)
      //     : await getAccessTokenSilently(auth0Config);
      setAccessToken(token);
      setIsLoading(false);
    })();
  }, [getAccessTokenSilently, getAccessTokenWithPopup]);

  const config = {
    ...baseConfig,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const instance = axios.create(config);

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      console.error(err);
    },
  );

  return { api: api(aspida(instance, aspidaConfig)), isLoading };
};
