import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements Pick<User, 'id' | 'email'> {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;
}
