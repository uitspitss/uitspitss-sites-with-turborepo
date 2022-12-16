/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.UserEntity
  }

  patch: {
    status: 200
    resBody: Types.UserEntity
    reqBody: Types.UpdateUserDto
  }

  delete: {
    status: 204
  }
}
