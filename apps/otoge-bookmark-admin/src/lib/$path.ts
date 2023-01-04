export const pagesPath = {
  "games": {
    _gameId: (gameId: string | number) => ({
      "edit": {
        $url: (url?: { hash?: string }) => ({ pathname: '/games/[gameId]/edit' as const, query: { gameId }, hash: url?.hash })
      }
    }),
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
