import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { GamesModule } from './games/games.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [GamesModule, SongsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
