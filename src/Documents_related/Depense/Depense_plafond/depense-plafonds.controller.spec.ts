import { Test, TestingModule } from '@nestjs/testing';
import { DepensePlafondsController } from './depense-plafonds.controller';

describe('DepensePlafondsController', () => {
  let controller: DepensePlafondsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepensePlafondsController],
    }).compile();

    controller = module.get<DepensePlafondsController>(DepensePlafondsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
