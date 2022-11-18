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
  create(@Body() data: CreateSongDto) {
    return this.songsService.create(data);
  }

  @Get()
  @ApiOkResponse({ type: SongEntity, isArray: true })
  findAll() {
    return this.songsService.findAll({});
  }

  @Get(':id')
  @ApiOkResponse({ type: SongEntity })
  findOne(@Param('id') id: string) {
    return this.songsService.findOne({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: SongEntity })
  update(@Param('id') id: string, @Body() data: UpdateSongDto) {
    return this.songsService.update({ where: { id }, data });
  }

  @Delete(':id')
  @ApiNoContentResponse()
  remove(@Param('id') id: string) {
    return this.songsService.remove({ id });
  }
}
