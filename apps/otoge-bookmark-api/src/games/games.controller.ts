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
  Query,
  BadRequestException,
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
import { GameEntity, GameWithSongsEntity } from './entities/game.entity';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import {
  DEFAULT_TAKE,
  DEFAULT_ORDER_BY,
} from '@/common/constants/list.constant';
import { ListGameDto } from './dto/list-game.dto';

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
  @ApiOkResponse({ type: GameWithSongsEntity, isArray: true })
  async findAll(@Query() query: ListGameDto) {
    const { skip, take, cursor, orderBy } = query;

    if (skip && isNaN(Number(skip))) {
      throw new BadRequestException('skip must be number');
    }

    if (take && isNaN(Number(take))) {
      throw new BadRequestException('take must be number');
    }

    if (cursor) {
      const game = await this.gamesService.findOne({ id: cursor });
      if (!game) {
        throw new NotFoundException('cursor is invalid');
      }
    }

    const games = await this.gamesService.findAll({
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : DEFAULT_TAKE,
      cursor: cursor
        ? {
            id: cursor,
          }
        : undefined,
      orderBy: {
        createdAt: orderBy ?? DEFAULT_ORDER_BY,
      },
    });

    if (!games.length) {
      throw new NotFoundException();
    }

    return games.map((game) => {
      return new GameWithSongsEntity(game);
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: GameWithSongsEntity })
  async findOne(@Param('id') id: string) {
    const game = await this.gamesService.findOne({ id });
    if (!game) {
      throw new NotFoundException();
    }
    return new GameWithSongsEntity(game);
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
