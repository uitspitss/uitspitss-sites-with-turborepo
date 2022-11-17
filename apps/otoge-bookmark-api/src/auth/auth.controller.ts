import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { AccessTokenEntity } from './entities/access-token.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';

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
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOkResponse({ type: AccessTokenEntity })
  async login(@Req() req: any) {
    return this.authService.login(req.user);
  }
}
