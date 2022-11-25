/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.SongEntity
  }

  patch: {
    status: 200
    resBody: Types.SongEntity
    reqBody: Types.UpdateSongDto
  }

  delete: {
    status: 204
  }
}
