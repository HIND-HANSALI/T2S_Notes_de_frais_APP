import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entites
import { Depense } from './Documents_related/Depense/Depense.entity';
import { DepenseCategory } from './Documents_related/Depense/Depense_category/DepenseCategory.entity';
import { NoteDeFrais } from './Documents_related/Note_de_frais/NoteDeFrais.entity';
import { DemandeAvance } from './Documents_related/Demande_d_avance/DemandeDavance.entity';
import { DocType } from './Documents_related/Document_type/DocType.entity';
import { OrdreDeMission } from './Documents_related/Ordre_de_mission/OrdreDeMission.entity';
import { DepensePlafond } from './Documents_related/Depense/Depense_plafond/DepensePlafond.entity';
import { StatutEmployee } from './User_related/Statut_employée/StatutEmployee.entity';
import { Role } from './User_related/Role/Role.entity';
import { Permission } from './User_related/Permission/Permission.entity';
import { User } from './User_related/User/User.entity';
import { Division } from './User_related/Division/Division.entity';
import { StatutValidation } from './validation_workflow/Statut_validation/StatutValidation.entity';
import { NiveauValidation } from './validation_workflow/Niveau_validation/NiveauValidation.entity';
import { CycleValidation } from './validation_workflow/Cycle_validation/CycleValidation.entity';
import { NoteDeFraisController } from './Documents_related/Note_de_frais/note-de-frais.controller';
import { NoteDeFraisModule } from './Documents_related/Note_de_frais/note-de-frais.module';
import { NoteDeFraisService } from './Documents_related/Note_de_frais/note-de-frais.service'
import { DepenseCategoriesController } from './Documents_related/Depense/Depense_category/depense-categories.controller';
import { DepenseCategoriesModule } from './Documents_related/Depense/Depense_category/depense-categories.module';
import { DepenseCategoriesService } from './Documents_related/Depense/Depense_category/depense-categories.service';
import { DocumentTypesController } from './documents_related/document_type/document-types.controller';
import { DocumentTypesModule } from './documents_related/document_type/document-types.module';
import {DocumentTypesService} from './documents_related/document_type/document-types.service';
import { DepensesModule } from './documents_related/depense/depenses.module';
import { DepensesService } from './documents_related/depense/depenses.service';
import {DepensesController} from './documents_related/depense/depenses.controller';
import { DepensePlafondsService } from './documents_related/depense/depense_plafond/depense-plafonds.service';
import { DepensePlafondsController } from './documents_related/depense/depense_plafond/depense-plafonds.controller';
import { DepensePlafondsModule } from './documents_related/depense/depense_plafond/depense-plafonds.module';
import { StatutValidationsModule } from './validation_workflow/statut_validation/statut-validations.module';
import { StatutValidationsController } from './validation_workflow/statut_validation/statut-validations.controller';
import { StatutValidationsService } from './validation_workflow/statut_validation/statut-validations.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3308,
      database:'t2s_notes_de_frais_app',
      username:'root',
      password:'',
      entities:[
        User, Role, Permission, Division, StatutEmployee,  //User related
        StatutValidation, NiveauValidation, CycleValidation,  //validation workflow
        DocType, DepenseCategory,DepensePlafond, Depense, NoteDeFrais, OrdreDeMission,DemandeAvance  //Documents related
      ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([DepenseCategory,NoteDeFrais,DocType,Depense,DepensePlafond,StatutValidation]),
    NoteDeFraisModule,
    DepenseCategoriesModule,
    DocumentTypesModule,
    DepensesModule,
    DepensePlafondsModule,
    StatutValidationsModule
  ],
  controllers: [AppController, NoteDeFraisController, DepenseCategoriesController, DocumentTypesController,DepensesController,DepensePlafondsController,StatutValidationsController],
  providers: [AppService,NoteDeFraisService, DepenseCategoriesService,DocumentTypesService,DepensesService,DepensePlafondsService,StatutValidationsService],
})
export class AppModule {}
