import { Test, TestingModule } from '@nestjs/testing';
import { NoteDeFraisService } from './note-de-frais.service';

describe('NoteDeFraisService', () => {
  let service: NoteDeFraisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteDeFraisService],
    }).compile();

    service = module.get<NoteDeFraisService>(NoteDeFraisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
