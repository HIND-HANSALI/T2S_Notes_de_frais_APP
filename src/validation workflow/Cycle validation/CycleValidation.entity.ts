import { DocType } from "src/Documents related/Document type/DocType.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne,ManyToMany, JoinColumn} from "typeorm";
import { NiveauValidation } from "../Niveau validation/NiveauValidation.entity";


@Entity('cycles_validation')
export class CycleValidation{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nom: string;

    @Column()
    ordre_chrono: number;


    @ManyToMany(()=>NiveauValidation, (niveau_validation)=>niveau_validation.cycle_validation)
    niveau_validation:NiveauValidation[]

    @OneToOne(()=>DocType)
    @JoinColumn({name: 'doc_type_id'})
    doc_type:DocType
}