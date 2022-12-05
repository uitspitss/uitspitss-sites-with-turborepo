import { GameEntity } from '@/games/entities/game.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Song } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class SongEntity implements Song {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @Exclude()
  gameId: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @ApiProperty()
  game: GameEntity;

  constructor(partial: Partial<SongEntity>) {
    Object.assign(this, partial);
  }
}
