import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@/common/enums/role.enums';
import { JwtRolesGuard } from '@/common/guards/jwt-roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JwtRolesGuard(Role.Admin))
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() data: CreateUserDto) {
    return new UserEntity(await this.usersService.create(data));
  }

  @Get()
  @UseGuards(JwtRolesGuard(Role.Admin))
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    const users = await this.usersService.findAll();
    if (!users.length) {
      throw new NotFoundException();
    }
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne({ id });
    if (!user) {
      throw new NotFoundException();
    }

    return new UserEntity(user);
  }

  @Patch(':id')
  @UseGuards(JwtRolesGuard(Role.Admin))
  @ApiOkResponse({ type: UserEntity })
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return new UserEntity(
      await this.usersService.update({ where: { id }, data }),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtRolesGuard(Role.Admin))
  @ApiNoContentResponse()
  async remove(@Param('id') id: string): Promise<void> {
    const user = await this.usersService.findOne({ id });
    if (!user) {
      throw new NotFoundException();
    }

    this.usersService.remove({ id });
  }
}
