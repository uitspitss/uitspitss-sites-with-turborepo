import { ApiProperty } from '@nestjs/swagger';
import { CategoriesOnSongs, Category } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { SongEntity } from '@/songs/entities/song.entity';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<CategoryEntity>) {
    Object.assign(this, partial);
  }
}

export class CategoryWithCategoriesEntity extends CategoryEntity {
  @ApiProperty({ type: () => SongEntity, isArray: true })
  songs: SongEntity[];

  constructor(partial: Partial<CategoryWithCategoriesEntity>) {
    super(partial);
    this.songs = partial.songs.map((song) => new SongEntity(song));
  }
}

// M2M of category and song
export class CategoriesOnSongsEntity implements CategoriesOnSongs {
  @ApiProperty()
  songId: string;

  @ApiProperty()
  categoryId: string;

  @Exclude()
  assignedAt: Date;

  constructor(partial: Partial<CategoriesOnSongsEntity>) {
    Object.assign(this, partial);
  }
}
