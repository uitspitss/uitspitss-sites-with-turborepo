/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.GameEntity
    reqBody: Types.CreateGameDto
  }

  get: {
    query?: {
      skip?: string | undefined
      take?: string | undefined
      cursor?: string | undefined
      orderBy?: 'asc' | 'desc' | undefined
    } | undefined

    status: 200
    resBody: Types.GameEntity[]
  }
}
