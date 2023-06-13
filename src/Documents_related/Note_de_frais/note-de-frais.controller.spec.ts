import { Test, TestingModule } from '@nestjs/testing';
import { NoteDeFraisController } from './note-de-frais.controller';

describe('NoteDeFraisController', () => {
  let controller: NoteDeFraisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteDeFraisController],
    }).compile();

    controller = module.get<NoteDeFraisController>(NoteDeFraisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
