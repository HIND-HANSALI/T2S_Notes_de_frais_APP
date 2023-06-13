import { Test, TestingModule } from '@nestjs/testing';
import { StatutValidationsService } from './statut-validations.service';

describe('StatutValidationsService', () => {
  let service: StatutValidationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatutValidationsService],
    }).compile();

    service = module.get<StatutValidationsService>(StatutValidationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
