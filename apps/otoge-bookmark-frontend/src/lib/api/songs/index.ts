/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.SongEntity
    reqBody: Types.CreateSongDto
  }

  get: {
    query?: {
      skip?: string | undefined
      take?: string | undefined
      cursor?: string | undefined
      orderBy?: 'asc' | 'desc' | undefined
      gameId?: string | undefined
    } | undefined

    status: 200
    resBody: Types.SongWithGameAndCategoriesEntity[]
  }
}
