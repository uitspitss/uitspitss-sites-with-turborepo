import { ApiProperty } from '@nestjs/swagger';
import { Game } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class GameEntity implements Game {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<GameEntity>) {
    Object.assign(this, partial);
  }
}
