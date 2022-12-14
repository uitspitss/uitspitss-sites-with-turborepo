import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request as RequestType } from 'express';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from '@/common/guards/google-oauth.guard';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { JwtRefreshTokenGuard } from '@/common/guards/jwt-refresh-token.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@Req() req: RequestType) {
    this.authService.logout(req.user['sub']);
  }

  @UseGuards(JwtRefreshTokenGuard)
  @Get('refresh')
  async refreshToken(@Req() req: RequestType) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refresh_token'];

    return this.authService.refreshToken(userId, refreshToken);
  }

  @UseGuards(GoogleOauthGuard)
  @Get('google')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth() {}

  @UseGuards(GoogleOauthGuard)
  @Get('google/callback')
  async googleCallback(@Request() req: RequestType) {
    return this.authService.loginOrRegister(req.user['email']);
  }
}
