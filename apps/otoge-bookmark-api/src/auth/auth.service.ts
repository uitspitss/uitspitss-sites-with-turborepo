import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import type { User } from '@prisma/client';
import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async registerUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password' | 'refreshToken'>> {
    const registeredUser = await this.usersService.findOne({ email });

    if (registeredUser) {
      throw new BadRequestException('this email user has registered');
    }

    const {
      password: _,
      refreshToken: _rt,
      ...user
    } = await this.usersService.create({
      email,
      password,
    });

    return user;
  }

  async login(data: LoginDto) {
    const user = await this.validateUser(data);

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string) {
    return this.usersService.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashed = await hash(refreshToken, 10);
    await this.usersService.update({
      where: { id: userId },
      data: { refreshToken: hashed },
    });
  }

  async refreshToken(userId: string, refreshToken: string) {
    const user = await this.usersService.findOne({ id: userId });
    if (!user || !user.refreshToken) {
      throw new ForbiddenException();
    }
    const isCorrect = await compare(refreshToken, user.refreshToken);
    if (!isCorrect) {
      throw new ForbiddenException();
    }
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async getTokens(userId: string, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: `${this.configService.get<number>(
            'JWT_EXPIRATION_TIME',
          )}s`,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: `${this.configService.get<number>(
            'JWT_REFRESH_EXPIRATION_TIME',
          )}d`,
        },
      ),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async validateUser(data: LoginDto) {
    const user = await this.usersService.findOne({ email: data.email });
    if (!user || !(await compare(data.password, user.password))) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const { password: _, refreshToken: _rt, ...retUser } = user;

    return retUser;
  }
}
