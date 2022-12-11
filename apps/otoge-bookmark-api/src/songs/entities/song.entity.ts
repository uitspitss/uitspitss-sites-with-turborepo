import { ApiProperty } from '@nestjs/swagger';
import { Song } from '@prisma/client';
import { Exclude } from 'class-transformer';
import {
  CategoriesOnSongsEntity,
  CategoryEntity,
} from '@/categories/entities/category.entity';
import { GameEntity } from '@/games/entities/game.entity';

export class SongEntity implements Song {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  gameId: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<SongEntity>) {
    Object.assign(this, partial);
  }
}

export class SongWithGameAndCategoriesEntity extends SongEntity {
  @ApiProperty({ type: () => GameEntity })
  game: GameEntity;

  @ApiProperty({
    type: () => CategoryEntity,
    isArray: true,
  })
  categories: (CategoriesOnSongsEntity & { category: CategoryEntity })[];

  constructor(partial: Partial<SongWithGameAndCategoriesEntity>) {
    super(partial);
    this.game = new GameEntity(partial.game);
    // NOTE: Remove M2M info from categories (ex. songId, categoryId)
    this.categories = partial.categories.map((category) =>
      Object.assign(new CategoryEntity(category.category)),
    );
  }
}
