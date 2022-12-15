import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
  imports: [PrismaModule],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
