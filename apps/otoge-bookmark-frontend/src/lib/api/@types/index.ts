/* eslint-disable */
export type CreateGameDto = {
  name: string
}

export type SongEntity = {
  id: string
  name: string
}

export type GameEntity = {
  id: string
  name: string
  songs: SongEntity[]
}

export type UpdateGameDto = {
  name?: string | undefined
}

export type CreateSongDto = {
  name: string
  gameId: string
}

export type UpdateSongDto = {
  name?: string | undefined
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
