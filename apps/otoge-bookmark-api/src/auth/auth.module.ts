import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleOauthStrategy } from './strategies/google-oauth.strategy';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, ConfigModule, JwtModule],
  providers: [
    AuthService,
    JwtStrategy,
    JwtRefreshTokenStrategy,
    GoogleOauthStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
