/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.GameEntity
  }

  patch: {
    status: 200
    resBody: Types.GameEntity
    reqBody: Types.UpdateGameDto
  }

  delete: {
    status: 204
  }
}
