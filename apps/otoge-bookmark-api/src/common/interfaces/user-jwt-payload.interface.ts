import { Role } from '@prisma/client';

export interface UserJwtPayload {
  sub: string;
  username: string;
  roles: Role[];
}
