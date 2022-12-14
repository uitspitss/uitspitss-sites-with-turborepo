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
  HttpCode,
  Query,
  BadRequestException,
  Inject,
  LoggerService,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import {
  DEFAULT_ORDER_BY,
  DEFAULT_TAKE,
} from '@/common/constants/list.constant';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CreateSongDto } from './dto/create-song.dto';
import { ListSongDto } from './dto/list-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import {
  SongEntity,
  SongWithGameAndCategoriesEntity,
} from './entities/song.entity';
import { SongsService } from './songs.service';

@Controller('songs')
@ApiTags('songs')
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: SongEntity })
  async create(@Body() data: CreateSongDto) {
    return new SongEntity(await this.songsService.create(data));
  }

  @Get()
  @ApiOkResponse({ type: SongWithGameAndCategoriesEntity, isArray: true })
  async findAll(@Query() query: ListSongDto) {
    const { gameId, skip, take, cursor, orderBy } = query;

    if (skip && isNaN(Number(skip))) {
      throw new BadRequestException('skip must be number');
    }

    if (take && isNaN(Number(take))) {
      throw new BadRequestException('take must be number');
    }

    if (cursor) {
      const song = await this.songsService.findOne({ id: cursor });
      if (!song) {
        throw new NotFoundException('cursor is invalid');
      }
    }

    const songs = await this.songsService.findAll({
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
      where: {
        gameId,
      },
    });

    if (!songs.length) {
      throw new NotFoundException();
    }

    this.logger.log(`song length: ${songs.length}`, SongsController.name);

    return songs.map((song) => {
      return new SongWithGameAndCategoriesEntity(song);
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: SongWithGameAndCategoriesEntity })
  async findOne(@Param('id') id: string) {
    const song = await this.songsService.findOne({ id });
    if (!song) {
      throw new NotFoundException();
    }
    return new SongWithGameAndCategoriesEntity(song);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ type: SongEntity })
  async update(@Param('id') id: string, @Body() data: UpdateSongDto) {
    return new SongEntity(
      await this.songsService.update({ where: { id }, data }),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse()
  async remove(@Param('id') id: string): Promise<void> {
    const song = await this.songsService.findOne({ id });
    if (!song) {
      throw new NotFoundException();
    }

    this.songsService.remove({ id });
  }
}
