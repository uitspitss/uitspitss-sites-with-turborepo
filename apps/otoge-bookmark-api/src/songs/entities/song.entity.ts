import { GameEntity } from '@/games/entities/game.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Song } from '@prisma/client';
import { Exclude } from 'class-transformer';

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

export class SongWithGameEntity extends SongEntity {
  @ApiProperty({ type: () => GameEntity })
  game: GameEntity;

  constructor(partial: Partial<SongWithGameEntity>) {
    super(partial);
    this.game = new GameEntity(partial.game);
  }
}
