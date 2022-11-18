import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSongDto) {
    return this.prisma.song.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SongWhereUniqueInput;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput;
  }) {
    return this.prisma.song.findMany(params);
  }

  findOne(where: Prisma.SongWhereUniqueInput) {
    return this.prisma.song.findUnique({
      where: where,
    });
  }

  update(params: { where: Prisma.SongWhereUniqueInput; data: UpdateSongDto }) {
    return this.prisma.song.update(params);
  }

  remove(where: Prisma.SongWhereUniqueInput) {
    return this.prisma.song.delete({ where });
  }
}
