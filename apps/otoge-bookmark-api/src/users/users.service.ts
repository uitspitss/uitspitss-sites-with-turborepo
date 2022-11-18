import { Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(email: string, pass: string): Promise<User> {
    return this.prisma.user.create({
      data: { email, password: await hash(pass, 10) },
    });
  }
}
