/* eslint-disable */
export type CreateGameDto = {
  title: string
}

export type GameEntity = {
  id: string
  title: string
}

export type UpdateGameDto = {
  title?: string | undefined
}

export type CreateSongDto = {
  title: string
  gameId: string
}

export type SongEntity = {
  id: string
  title: string
  gameId: string
}

export type UpdateSongDto = {
  title?: string | undefined
  gameId?: string | undefined
}

export type CreateUserDto = {
  email: string
  password: string
}

export type UserEntity = {
  id: string
  email: string
}

export type LoginDto = {
  email: string
  password: string
}

export type LoggedInTokenEntity = {
  accessToken: string
  refreshToken: string
}

export type UpdateUserDto = {
  email?: string | undefined
  password?: string | undefined
}
