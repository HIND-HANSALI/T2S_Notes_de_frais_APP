import { Module } from '@nestjs/common';
import { DepensePlafondsController } from './depense-plafonds.controller';
import { DepensePlafondsService } from './depense-plafonds.service';
import { DepenseCategory } from '../Depense_category/DepenseCategory.entity';
import { DepensePlafond } from './DepensePlafond.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/User_related/User/User.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepensePlafond,DepenseCategory,User])],
  controllers: [DepensePlafondsController],
  providers: [DepensePlafondsService]
})
export class DepensePlafondsModule {

}
