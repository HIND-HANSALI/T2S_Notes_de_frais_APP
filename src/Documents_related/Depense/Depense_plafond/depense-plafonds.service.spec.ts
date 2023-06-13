import { Test, TestingModule } from '@nestjs/testing';
import { DepensePlafondsService } from './depense-plafonds.service';

describe('DepensePlafondsService', () => {
  let service: DepensePlafondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepensePlafondsService],
    }).compile();

    service = module.get<DepensePlafondsService>(DepensePlafondsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
