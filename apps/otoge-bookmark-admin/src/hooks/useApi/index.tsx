import aspida from '@aspida/axios';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import api from '@/lib/api/$api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const loginUrl = `${API_URL}/auth/google/login`;
const refreshUrl = `${API_URL}/auth/refresh`;

const baseConfig = {
  baseURL: API_URL,
};

const aspidaConfig: AxiosRequestConfig = {
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { indices: false }),
  },
};

const redirectLogin = () => {
  location.href = loginUrl;
};

const refreshTokens = async () => {
  const tokens = await axios
    .get(refreshUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
      },
    })
    .then((res) => res.data)
    .catch((_err) => {
      redirectLogin();
    });

  const { access_token, refresh_token } = tokens;
  localStorage.setItem('access_token', access_token);
  localStorage.setItem('refresh_token', refresh_token);
};

export const useApi = () => {
  if (typeof window === 'undefined') {
    const instance = axios.create(baseConfig);

    return api(aspida(instance, aspidaConfig));
  }

  const config = {
    ...baseConfig,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  };

  const instance = axios.create(config);

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      if (err.response.status === 401) {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          await refreshTokens();
        }

        const res = await axios
          .request({
            ...err.config,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          })
          .catch((_err) => {
            redirectLogin();
          });

        return res;
      }
    },
  );

  return api(aspida(instance, aspidaConfig));
};
