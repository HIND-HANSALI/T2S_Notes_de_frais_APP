import { Test, TestingModule } from '@nestjs/testing';
import { DepenseCategoriesController } from './depense-categories.controller';

describe('DepenseCategoriesController', () => {
  let controller: DepenseCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepenseCategoriesController],
    }).compile();

    controller = module.get<DepenseCategoriesController>(DepenseCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
