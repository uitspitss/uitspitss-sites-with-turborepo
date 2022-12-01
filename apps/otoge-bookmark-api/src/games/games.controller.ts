import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  NotFoundException,
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
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';

@Controller('games')
@ApiTags('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: GameEntity })
  async create(@Body() data: CreateGameDto) {
    return new GameEntity(await this.gamesService.create(data));
  }

  @Get()
  @ApiOkResponse({ type: GameEntity, isArray: true })
  async findAll() {
    const games = await this.gamesService.findAll({});
    if (!games.length) {
      throw new NotFoundException();
    }

    return games.map((game) => new GameEntity(game));
  }

  @Get(':id')
  @ApiOkResponse({ type: GameEntity })
  async findOne(@Param('id') id: string) {
    const game = await this.gamesService.findOne({ id });
    if (!game) {
      throw new NotFoundException();
    }
    return new GameEntity(game);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ type: GameEntity })
  async update(@Param('id') id: string, @Body() data: UpdateGameDto) {
    return new GameEntity(
      await this.gamesService.update({ where: { id }, data }),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiNoContentResponse()
  async remove(@Param('id') id: string): Promise<void> {
    const game = await this.gamesService.findOne({ id });
    if (!game) {
      throw new NotFoundException();
    }

    this.gamesService.remove({ id });
  }
}
