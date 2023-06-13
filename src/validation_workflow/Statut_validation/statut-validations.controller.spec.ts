import { Test, TestingModule } from '@nestjs/testing';
import { StatutValidationsController } from './statut-validations.controller';

describe('StatutValidationsController', () => {
  let controller: StatutValidationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatutValidationsController],
    }).compile();

    controller = module.get<StatutValidationsController>(StatutValidationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
