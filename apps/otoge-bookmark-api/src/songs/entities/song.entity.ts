import { ApiProperty } from '@nestjs/swagger';
import { Song } from '@prisma/client';

export class SongEntity implements Song {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  gameId: string;
}
