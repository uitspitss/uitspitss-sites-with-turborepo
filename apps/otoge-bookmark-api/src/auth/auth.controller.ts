import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoggedInTokenEntity } from './entities/logged-in-token.entity';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { JwtRefreshTokenGuard } from '@/common/guards/jwt-refresh-token.guard';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UserEntity } from '@/users/entities/user.entity';
// eslint-disable-next-line import/no-extraneous-dependencies

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('register')
  @ApiCreatedResponse({ type: UserEntity })
  async register(@Body() data: CreateUserDto) {
    const { email, password } = data;

    return this.authService.registerUser(email, password);
  }

  @HttpCode(200)
  @Post('login')
  @ApiOkResponse({ type: LoggedInTokenEntity })
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@Req() req: Request) {
    this.authService.logout(req.user['sub']);
  }

  @UseGuards(JwtRefreshTokenGuard)
  @Get('refresh')
  async refreshToken(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refresh_token'];

    return this.authService.refreshToken(userId, refreshToken);
  }
}
