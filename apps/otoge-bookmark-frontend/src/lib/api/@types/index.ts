/* eslint-disable */
export type CreateGameDto = {
  name: string
}

export type GameEntity = {
  id: string
  name: string
}

export type SongEntity = {
  id: string
  name: string
}

export type GameWithSongsEntity = {
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

export type CategoryEntity = {
  id: string
  name: string
}

export type SongWithGameAndCategoriesEntity = {
  id: string
  name: string
  game: GameEntity
  categories: CategoryEntity[]
}

export type UpdateSongDto = {
  name?: string | undefined
  gameId?: string | undefined
}

export type CreateUserDto = {
  email: string
}

export type UserEntity = {
  id: string
  email: string
}

export type UpdateUserDto = {
  email?: string | undefined
}

export type CreateCategoryDto = {
  name: string
}

export type UpdateCategoryDto = {
  name?: string | undefined
}
