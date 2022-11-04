import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { GameService } from './game/game.service';
import { SongService } from './song/song.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, GameService, SongService],
})
export class AppModule {}
