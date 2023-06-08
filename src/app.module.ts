import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entites
import { Depense } from './Documents_related/Depense/Depense.entity';
import { DepenseCategory } from './Documents_related/Depense/Depense category/DepenseCategory.entity';
import { NoteDeFrais } from './Documents_related/Note_de_frais/NoteDeFrais.entity';
import { DemandeAvance } from './Documents_related/Demande_d_avance/DemandeDavance.entity';
import { DocType } from './Documents_related/Document_type/DocType.entity';
import { OrdreDeMission } from './Documents_related/Ordre_de_mission/OrdreDeMission.entity';
import { DepensePlafond } from './Documents_related/Depense/Depense plafond/DepensePlafond.entity';
import { StatutEmployee } from './User_related/Statut_employée/StatutEmployee.entity';
import { Role } from './User_related/Role/Role.entity';
import { Permission } from './User_related/Permission/Permission.entity';
import { User } from './User_related/User/User.entity';
import { Division } from './User_related/Division/Division.entity';
import { StatutValidation } from './validation_workflow/Statut_validation/StatutValidation.entity';
import { NiveauValidation } from './validation_workflow/Niveau_validation/NiveauValidation.entity';
import { CycleValidation } from './validation_workflow/Cycle_validation/CycleValidation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3306,
      database:'t2s_notes_de_frais_app',
      username:'root',
      password:'',
      entities:[
        User, Role, Permission, Division, StatutEmployee,  //User related
        StatutValidation, NiveauValidation, CycleValidation,  //validation workflow
        DocType, DepenseCategory,DepensePlafond, Depense, NoteDeFrais, OrdreDeMission,DemandeAvance  //Documents related
      ],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
