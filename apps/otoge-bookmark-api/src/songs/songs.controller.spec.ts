import { Test, TestingModule } from '@nestjs/testing';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { PrismaModule } from '@/prisma/prisma.module';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

jest.mock('@/games/entities/game.entity', () => ({
  GameEntity: jest.fn(),
}));

describe('SongsController', () => {
  let controller: SongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [SongsController],
      providers: [
        SongsService,
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: { debug: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<SongsController>(SongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
