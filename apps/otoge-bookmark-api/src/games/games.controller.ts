import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GameEntity } from './entities/game.entity';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('games')
@UseGuards(JwtAuthGuard)
@ApiTags('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiCreatedResponse({ type: GameEntity })
  create(@Body() data: CreateGameDto) {
    return this.gamesService.create(data);
  }

  @Get()
  @ApiOkResponse({ type: GameEntity, isArray: true })
  findAll() {
    return this.gamesService.findAll({});
  }

  @Get(':id')
  @ApiOkResponse({ type: GameEntity })
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: GameEntity })
  update(@Param('id') id: string, @Body() data: UpdateGameDto) {
    return this.gamesService.update({ where: { id }, data });
  }

  @Delete(':id')
  @ApiNoContentResponse()
  remove(@Param('id') id: string) {
    return this.gamesService.remove({ id });
  }
}
