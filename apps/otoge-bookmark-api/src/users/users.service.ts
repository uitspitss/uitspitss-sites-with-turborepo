import { Injectable } from '@nestjs/common';
import type { Prisma, User } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from '@/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const { email, password } = data;

    return this.prisma.user.create({
      data: { email, password: await hash(password, 10) },
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUserDto;
  }) {
    return this.prisma.user.update(params);
  }
}
