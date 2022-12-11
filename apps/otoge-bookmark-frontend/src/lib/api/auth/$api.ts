import type { Methods as Methods0 } from './login'
import type { Methods as Methods1 } from './logout'
import type { Methods as Methods2 } from './refresh'
import type { Methods as Methods3 } from './register'
import type { AspidaClient, BasicHeaders } from 'aspida'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/login'
  const PATH1 = '/auth/logout'
  const PATH2 = '/auth/refresh'
  const PATH3 = '/auth/register'
  const GET = 'GET'
  const POST = 'POST'

  return {
    login: {
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    logout: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    refresh: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    register: {
      post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json(),
      $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
