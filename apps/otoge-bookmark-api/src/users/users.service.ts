import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import type { Prisma, User } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const { email } = data;

    return this.prisma.user.create({
      data: { email },
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GameWhereUniqueInput;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithRelationInput;
  }) {
    return this.prisma.user.findMany(params);
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUserDto & { refreshToken?: string };
  }) {
    return this.prisma.user.update(params);
  }

  async remove(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }

  async registerUser(email: string): Promise<User> {
    const registeredUser = await this.findOne({ email });

    if (registeredUser) {
      throw new BadRequestException('this email user has registered');
    }

    return this.create({
      email,
    });
  }
}
