import aspida from '@aspida/axios';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import api from '@/lib/api/$api';

const API_URL = process.env.NEXT_PUBLIC_API_PATH;

const baseConfig = {
  baseURL: API_URL,
};

const aspidaConfig: AxiosRequestConfig = {
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { indices: false }),
  },
};

export const useApi = () => {
  const instance = axios.create(baseConfig);
  return api(aspida(instance, aspidaConfig));
};
