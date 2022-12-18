import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './callback'
import type { Methods as Methods1 } from './login'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/google/callback'
  const PATH1 = '/auth/google/login'
  const GET = 'GET'

  return {
    callback: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    login: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
