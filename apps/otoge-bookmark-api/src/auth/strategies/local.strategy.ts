import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({
      usernameFiled: 'email',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.validateUser({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
