import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@/common/decorators/user.decorator';
import { GoogleOauthGuard } from '@/common/guards/google-oauth.guard';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { JwtRefreshTokenGuard } from '@/common/guards/jwt-refresh-token.guard';
import { GoogleOauthUser } from '@/common/interfaces/google-oauth-user.interface';
import { UserJwtPayload } from '@/common/interfaces/user-jwt-payload.interface';
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
  async logout(@User() user: UserJwtPayload) {
    this.authService.logout(user.sub);
  }

  @UseGuards(JwtRefreshTokenGuard)
  @Get('refresh')
  async refreshToken(@User() user: UserJwtPayload & { refresh_token: string }) {
    const userId = user.sub;
    const refreshToken = user.refresh_token;

    return this.authService.refreshToken(userId, refreshToken);
  }

  @UseGuards(GoogleOauthGuard)
  @Get('google/login')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth() {}

  @UseGuards(GoogleOauthGuard)
  @Get('google/callback')
  async googleCallback(@User() user: GoogleOauthUser) {
    return this.authService.loginOrRegister(user.email);
  }
}
