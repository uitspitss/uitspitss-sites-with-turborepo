import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await compare(pass, user.password))) {
      throw new UnauthorizedException('Incorrect username or password');
    }

    const { password, ...result } = user;
    return result;
  }

  async registerUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'>> {
    const registeredUser = await this.usersService.findByEmail(email);

    if (registeredUser) {
      throw new BadRequestException('this email user has registered');
    }

    const { password, ...user } = await this.usersService.create(email, pass);
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
