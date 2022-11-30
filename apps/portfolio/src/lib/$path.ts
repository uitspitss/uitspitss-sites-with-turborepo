export const pagesPath = {
  "contact": {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "jobs": {
    $url: (url?: { hash?: string }) => ({ pathname: '/jobs' as const, hash: url?.hash })
  },
  "works": {
    $url: (url?: { hash?: string }) => ({ pathname: '/works' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
