import { Injectable } from '@nestjs/common';
import type { Song, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async song(
    songWhereUniqueInput: Prisma.SongWhereUniqueInput,
  ): Promise<Song | null> {
    return this.prisma.song.findUnique({
      where: songWhereUniqueInput,
    });
  }

  async songs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SongWhereUniqueInput;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput;
  }): Promise<Song[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.song.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createSong(data: Prisma.SongCreateInput): Promise<Song> {
    return this.prisma.song.create({
      data,
    });
  }

  async updateSong(params: {
    where: Prisma.SongWhereUniqueInput;
    data: Prisma.SongUpdateInput;
  }): Promise<Song> {
    const { where, data } = params;

    return this.prisma.song.update({
      data,
      where,
    });
  }

  async deleteSong(where: Prisma.SongWhereUniqueInput): Promise<Song> {
    return this.prisma.song.delete({
      where,
    });
  }
}
