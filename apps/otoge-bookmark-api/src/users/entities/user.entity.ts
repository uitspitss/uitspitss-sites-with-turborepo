import { ApiProperty } from '@nestjs/swagger';
import { User, Role } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  password: string;

  @Exclude()
  refreshToken: string;

  @Exclude()
  role: Role;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
