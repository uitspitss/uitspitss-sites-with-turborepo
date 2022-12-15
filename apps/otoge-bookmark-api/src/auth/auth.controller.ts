import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request as RequestType } from 'express';
import { GoogleOauthGuard } from '@/common/guards/google-oauth.guard';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { JwtRefreshTokenGuard } from '@/common/guards/jwt-refresh-token.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoggedInTokenEntity } from './entities/logged-in-token.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  @ApiOkResponse({ type: LoggedInTokenEntity })
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

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
  @Get('google/login')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth() {}

  @UseGuards(GoogleOauthGuard)
  @Get('google/callback')
  async googleCallback(@Request() req: RequestType) {
    return this.authService.loginOrRegister(req.user['email']);
  }
}
