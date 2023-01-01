export const pagesPath = {
  "games": {
    $url: (url?: { hash?: string }) => ({ pathname: '/games' as const, hash: url?.hash })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  "songs": {
    $url: (url?: { hash?: string }) => ({ pathname: '/songs' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
