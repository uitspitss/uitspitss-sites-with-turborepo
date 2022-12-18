import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './google/callback'
import type { Methods as Methods1 } from './google/login'
import type { Methods as Methods2 } from './login'
import type { Methods as Methods3 } from './logout'
import type { Methods as Methods4 } from './refresh'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/google/callback'
  const PATH1 = '/auth/google/login'
  const PATH2 = '/auth/login'
  const PATH3 = '/auth/logout'
  const PATH4 = '/auth/refresh'
  const GET = 'GET'
  const POST = 'POST'

  return {
    google: {
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
    },
    login: {
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    logout: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    refresh: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
