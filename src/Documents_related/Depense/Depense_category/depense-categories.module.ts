import { Module } from '@nestjs/common';
import { DepenseCategoriesService } from './depense-categories.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DepenseCategory} from './DepenseCategory.entity';
import {DepenseCategoriesController} from './depense-categories.controller'

@Module({
  imports:[TypeOrmModule.forFeature([DepenseCategory])],
  controllers: [DepenseCategoriesController],
  providers: [DepenseCategoriesService]
})
export class DepenseCategoriesModule {}
