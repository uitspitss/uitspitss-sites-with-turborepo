import axios from 'axios';
import aspida from '@aspida/axios';
import qs from 'qs';
import api from '../../../api/$api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const loginUrl = `${API_URL}/auth/login`;
const refreshUrl = `${API_URL}/auth/refresh`;

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
  if (typeof window === 'undefined') return null;

  const config = {
    baseURL: API_URL,
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

  return api(
    aspida(instance, {
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { indices: false }),
      },
    }),
  );
};