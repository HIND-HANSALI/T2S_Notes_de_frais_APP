import { Role } from "src/User related/Role/Role.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import { CycleValidation } from "../Cycle validation/CycleValidation.entity";
import { StatutValidation } from "../Statut validation/StatutValidation.entity";


@Entity('niveaux_validation')
export class NiveauValidation{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    niveau: string;

    @OneToOne(()=>Role)
    @JoinColumn({name: 'role_id'})
    role:Role

    @OneToOne(()=>StatutValidation)
    @JoinColumn({name: 'statut_id'})
    statut:Role

    @ManyToMany(()=>CycleValidation, (cycle_validation)=>cycle_validation.niveau_validation)
    @JoinTable()
    cycle_validation:CycleValidation[]
}