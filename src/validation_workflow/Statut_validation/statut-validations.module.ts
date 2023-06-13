import { Module } from '@nestjs/common';
import { StatutValidationsController } from './statut-validations.controller';
import { StatutValidationsService } from './statut-validations.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { StatutValidation } from './StatutValidation.entity';
@Module({
  imports:[TypeOrmModule.forFeature([StatutValidation])],
  controllers: [StatutValidationsController],
  providers: [StatutValidationsService]
})
export class StatutValidationsModule {}
