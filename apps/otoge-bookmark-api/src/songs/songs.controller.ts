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
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SongEntity } from './entities/song.entity';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';

@Controller('songs')
@UseGuards(JwtAuthGuard)
@ApiTags('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  @ApiCreatedResponse({ type: SongEntity })
  async create(@Body() data: CreateSongDto) {
    return new SongEntity(await this.songsService.create(data));
  }

  @Get()
  @ApiOkResponse({ type: SongEntity, isArray: true })
  async findAll() {
    const songs = await this.songsService.findAll({});
    if (!songs.length) {
      throw new NotFoundException();
    }

    return songs.map((song) => new SongEntity(song));
  }

  @Get(':id')
  @ApiOkResponse({ type: SongEntity })
  async findOne(@Param('id') id: string) {
    const song = await this.songsService.findOne({ id });
    if (!song) {
      throw new NotFoundException();
    }
    return new SongEntity(song);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SongEntity })
  async update(@Param('id') id: string, @Body() data: UpdateSongDto) {
    return new SongEntity(
      await this.songsService.update({ where: { id }, data }),
    );
  }

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
