import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Depense } from "src/Documents related/Note de frais/Depense/Depense.entity";
import { DocType } from "../Document type/DocType.entity";

@Entity('notes_de_frais')
export class NoteDeFrais{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    montant_total:number

    @Column()
    created_at:Date

    @OneToMany(()=>Depense, (depense)=>depense.note_de_frais)
    depenses:Depense[]

    @ManyToOne(()=>DocType, (doc_type)=>doc_type.note_de_frais)
    @JoinColumn({name: 'doc_type_id'})
    doc_type:DocType
}

