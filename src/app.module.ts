import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entites
import { Depense } from './Documents related/Note de frais/Depense/Depense.entity';
import { DepenseCategory } from './Documents related/Note de frais/Depense/Depense category/DepenseCategory.entity';
import { NoteDeFrais } from './Documents related/Note de frais/NoteDeFrais.entity';
import { DemandeAvance } from './Documents related/Demande d avance/DemandeDavance.entity';
import { DocType } from './Documents related/Document type/DocType.entity';
import { OrdreDeMission } from './Documents related/Ordre de mission/OrdreDeMission.entity';
import { DepensePlafond } from './Documents related/Note de frais/Depense/Depense plafond/DepensePlafond.entity';
import { StatutEmployee } from './User related/Statut employée/StatutEmployee.entity';
import { Role } from './User related/Role/Role.entity';
import { Permission } from './User related/Permission/Permission.entity';
import { User } from './User related/User/User.entity';
import { Division } from './User related/Division/Division.entity';
import { StatutValidation } from './validation workflow/Statut validation/StatutValidation.entity';
import { NiveauValidation } from './validation workflow/Niveau validation/NiveauValidation.entity';
import { CycleValidation } from './validation workflow/Cycle validation/CycleValidation.entity';

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
