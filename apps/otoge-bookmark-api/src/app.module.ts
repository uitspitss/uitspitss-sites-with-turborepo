import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { SongsModule } from './songs/songs.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GamesModule, SongsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
