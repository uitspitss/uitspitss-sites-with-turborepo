import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
  imports: [PrismaModule],
})
export class SongsModule {}
