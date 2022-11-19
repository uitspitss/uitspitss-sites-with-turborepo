import { ApiProperty } from '@nestjs/swagger';
import { Song } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class SongEntity implements Song {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  gameId: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<SongEntity>) {
    Object.assign(this, partial);
  }
}
