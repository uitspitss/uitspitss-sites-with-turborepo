import { ApiProperty } from '@nestjs/swagger';
import { Game } from '@prisma/client';

export class GameEntity implements Game {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}
