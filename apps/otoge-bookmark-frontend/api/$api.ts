import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from './auth/login';
import type { Methods as Methods1 } from './auth/logout';
import type { Methods as Methods2 } from './auth/refresh';
import type { Methods as Methods3 } from './auth/register';
import type { Methods as Methods4 } from './games';
import type { Methods as Methods5 } from './games/_id@string';
import type { Methods as Methods6 } from './health';
import type { Methods as Methods7 } from './songs';
import type { Methods as Methods8 } from './songs/_id@string';
import type { Methods as Methods9 } from './users';
import type { Methods as Methods10 } from './users/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/auth/login';
  const PATH1 = '/auth/logout';
  const PATH2 = '/auth/refresh';
  const PATH3 = '/auth/register';
  const PATH4 = '/games';
  const PATH5 = '/health';
  const PATH6 = '/songs';
  const PATH7 = '/users';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    auth: {
      login: {
        post: (option: {
          body: Methods0['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods0['post']['resBody'],
            BasicHeaders,
            Methods0['post']['status']
          >(prefix, PATH0, POST, option).json(),
        $post: (option: {
          body: Methods0['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods0['post']['resBody'],
            BasicHeaders,
            Methods0['post']['status']
          >(prefix, PATH0, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      logout: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['get']['status']>(
            prefix,
            PATH1,
            GET,
            option,
          ).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['get']['status']>(
            prefix,
            PATH1,
            GET,
            option,
          )
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      refresh: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods2['get']['status']>(
            prefix,
            PATH2,
            GET,
            option,
          ).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods2['get']['status']>(
            prefix,
            PATH2,
            GET,
            option,
          )
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      register: {
        post: (option: {
          body: Methods3['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods3['post']['resBody'],
            BasicHeaders,
            Methods3['post']['status']
          >(prefix, PATH3, POST, option).json(),
        $post: (option: {
          body: Methods3['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods3['post']['resBody'],
            BasicHeaders,
            Methods3['post']['status']
          >(prefix, PATH3, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
    },
    games: {
      _id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods5['get']['resBody'],
              BasicHeaders,
              Methods5['get']['status']
            >(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods5['get']['resBody'],
              BasicHeaders,
              Methods5['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          patch: (option: {
            body: Methods5['patch']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch<
              Methods5['patch']['resBody'],
              BasicHeaders,
              Methods5['patch']['status']
            >(prefix, prefix1, PATCH, option).json(),
          $patch: (option: {
            body: Methods5['patch']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch<
              Methods5['patch']['resBody'],
              BasicHeaders,
              Methods5['patch']['status']
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option,
            ).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option,
            )
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: {
        body: Methods4['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods4['post']['resBody'],
          BasicHeaders,
          Methods4['post']['status']
        >(prefix, PATH4, POST, option).json(),
      $post: (option: {
        body: Methods4['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods4['post']['resBody'],
          BasicHeaders,
          Methods4['post']['status']
        >(prefix, PATH4, POST, option)
          .json()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods4['get']['resBody'],
          BasicHeaders,
          Methods4['get']['status']
        >(prefix, PATH4, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods4['get']['resBody'],
          BasicHeaders,
          Methods4['get']['status']
        >(prefix, PATH4, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    health: {
      /**
       * @returns The Health Check is successful
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods6['get']['resBody'],
          BasicHeaders,
          Methods6['get']['status']
        >(prefix, PATH5, GET, option).json(),
      /**
       * @returns The Health Check is successful
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods6['get']['resBody'],
          BasicHeaders,
          Methods6['get']['status']
        >(prefix, PATH5, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
    songs: {
      _id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods8['get']['resBody'],
              BasicHeaders,
              Methods8['get']['status']
            >(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods8['get']['resBody'],
              BasicHeaders,
              Methods8['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          patch: (option: {
            body: Methods8['patch']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch<
              Methods8['patch']['resBody'],
              BasicHeaders,
              Methods8['patch']['status']
            >(prefix, prefix1, PATCH, option).json(),
          $patch: (option: {
            body: Methods8['patch']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch<
              Methods8['patch']['resBody'],
              BasicHeaders,
              Methods8['patch']['status']
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option,
            ).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option,
            )
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: {
        body: Methods7['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods7['post']['resBody'],
          BasicHeaders,
          Methods7['post']['status']
        >(prefix, PATH6, POST, option).json(),
      $post: (option: {
        body: Methods7['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods7['post']['resBody'],
          BasicHeaders,
          Methods7['post']['status']
        >(prefix, PATH6, POST, option)
          .json()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods7['get']['resBody'],
          BasicHeaders,
          Methods7['get']['status']
        >(prefix, PATH6, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods7['get']['resBody'],
          BasicHeaders,
          Methods7['get']['status']
        >(prefix, PATH6, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods10['get']['resBody'],
              BasicHeaders,
              Methods10['get']['status']
            >(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods10['get']['resBody'],
              BasicHeaders,
              Methods10['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          patch: (option: {
            body: Methods10['patch']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch<
              Methods10['patch']['resBody'],
              BasicHeaders,
              Methods10['patch']['status']
            >(prefix, prefix1, PATCH, option).json(),
          $patch: (option: {
            body: Methods10['patch']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch<
              Methods10['patch']['resBody'],
              BasicHeaders,
              Methods10['patch']['status']
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option,
            ).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option,
            )
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: {
        body: Methods9['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods9['post']['resBody'],
          BasicHeaders,
          Methods9['post']['status']
        >(prefix, PATH7, POST, option).json(),
      $post: (option: {
        body: Methods9['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods9['post']['resBody'],
          BasicHeaders,
          Methods9['post']['status']
        >(prefix, PATH7, POST, option)
          .json()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods9['get']['resBody'],
          BasicHeaders,
          Methods9['get']['status']
        >(prefix, PATH7, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods9['get']['resBody'],
          BasicHeaders,
          Methods9['get']['status']
        >(prefix, PATH7, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH7}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;