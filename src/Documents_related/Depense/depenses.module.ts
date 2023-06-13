import { Module } from '@nestjs/common';
import { DepensesController } from './depenses.controller';
import { DepensesService } from './depenses.service';

import {TypeOrmModule} from '@nestjs/typeorm';
import {Depense} from './Depense.entity';
import { DepenseCategory } from './Depense_category/DepenseCategory.entity';
import { User } from 'src/User_related/User/User.entity';
import { NoteDeFrais } from '../Note_de_frais/NoteDeFrais.entity';
import { DepensePlafondsModule } from './depense_plafond/depense-plafonds.module';
@Module({
  imports:[TypeOrmModule.forFeature([Depense,DepenseCategory,User, NoteDeFrais]), DepensePlafondsModule],
  controllers: [DepensesController],
  providers: [DepensesService]
})
export class DepensesModule {}
