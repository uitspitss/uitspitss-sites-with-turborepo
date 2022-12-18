import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './auth/google/callback'
import type { Methods as Methods1 } from './auth/google/login'
import type { Methods as Methods2 } from './auth/login'
import type { Methods as Methods3 } from './auth/logout'
import type { Methods as Methods4 } from './auth/refresh'
import type { Methods as Methods5 } from './categories'
import type { Methods as Methods6 } from './categories/_id@string'
import type { Methods as Methods7 } from './games'
import type { Methods as Methods8 } from './games/_id@string'
import type { Methods as Methods9 } from './songs'
import type { Methods as Methods10 } from './songs/_id@string'
import type { Methods as Methods11 } from './users'
import type { Methods as Methods12 } from './users/_id@string'
import type { AspidaClient, BasicHeaders } from 'aspida'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/google/callback'
  const PATH1 = '/auth/google/login'
  const PATH2 = '/auth/login'
  const PATH3 = '/auth/logout'
  const PATH4 = '/auth/refresh'
  const PATH5 = '/categories'
  const PATH6 = '/games'
  const PATH7 = '/songs'
  const PATH8 = '/users'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    auth: {
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
    },
    categories: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          patch: (option: { body: Methods6['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option: { body: Methods6['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send(),
      $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    games: {
      _id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json(),
      $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      get: (option?: { query?: Methods7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH6, GET, option).json(),
      $get: (option?: { query?: Methods7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    songs: {
      _id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods10['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods10['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH7, POST, option).json(),
      $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
      get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH7, GET, option).json(),
      $get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH8}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods12['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods12['patch']['resBody'], BasicHeaders, Methods12['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods12['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods12['patch']['resBody'], BasicHeaders, Methods12['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods11['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH8, POST, option).json(),
      $post: (option: { body: Methods11['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH8, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH8}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
