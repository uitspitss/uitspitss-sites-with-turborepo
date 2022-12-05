import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateGameDto) {
    return this.prisma.game.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GameWhereUniqueInput;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithRelationInput;
  }) {
    return this.prisma.game.findMany({
      ...params,
      include: {
        songs: true,
      },
    });
  }

  findOne(where: Prisma.GameWhereUniqueInput) {
    return this.prisma.game.findUnique({
      where,
      include: {
        songs: true,
      },
    });
  }

  update(params: { where: Prisma.GameWhereUniqueInput; data: UpdateGameDto }) {
    return this.prisma.game.update(params);
  }

  remove(where: Prisma.GameWhereUniqueInput) {
    return this.prisma.game.delete({ where });
  }
}
