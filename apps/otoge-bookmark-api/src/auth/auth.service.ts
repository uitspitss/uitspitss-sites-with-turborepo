import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { UsersService } from '@/users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(data: LoginDto) {
    const user = await this.validateUser(data);

    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async loginOrRegister(email: string) {
    let user = await this.usersService.findOne({ email });
    if (!user) {
      user = await this.usersService.registerUser(email);
    }

    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string) {
    return this.usersService.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  private async updateRefreshToken(userId: string, refreshToken: string) {
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
    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshToken(user.id, tokens.refresh_token);

    return tokens;
  }

  private async getTokens(userId: string, username: string, userRole: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
          roles: [userRole],
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
          roles: [userRole],
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
    if (
      !user ||
      !user.password ||
      !data.password ||
      !(await compare(data.password, user.password))
    ) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const { password: _, refreshToken: _rt, ...retUser } = user;

    return retUser;
  }
}
