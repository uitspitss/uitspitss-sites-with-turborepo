import { ApiProperty } from '@nestjs/swagger';
import { Game } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { SongEntity } from '@/songs/entities/song.entity';

export class GameEntity implements Game {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<GameEntity>) {
    Object.assign(this, partial);
  }
}

export class GameWithSongsEntity extends GameEntity {
  @ApiProperty({ type: SongEntity, isArray: true })
  songs: SongEntity[];

  constructor(partial: Partial<GameWithSongsEntity>) {
    super(partial);
    this.songs = partial.songs.map((song) => new SongEntity(song));
  }
}
