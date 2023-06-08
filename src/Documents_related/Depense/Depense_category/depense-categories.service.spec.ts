import { Test, TestingModule } from '@nestjs/testing';
import { DepenseCategoriesService } from './depense-categories.service';

describe('DepenseCategoriesService', () => {
  let service: DepenseCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepenseCategoriesService],
    }).compile();

    service = module.get<DepenseCategoriesService>(DepenseCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
