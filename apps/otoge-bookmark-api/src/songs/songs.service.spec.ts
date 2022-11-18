import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '@/prisma/prisma.module';
import { SongsService } from './songs.service';

describe('SongsService', () => {
  let service: SongsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [SongsService],
    }).compile();

    service = module.get<SongsService>(SongsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
