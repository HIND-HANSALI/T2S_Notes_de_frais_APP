import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { DocType } from "../Document type/DocType.entity";
import { Depense } from "../Note de frais/Depense/Depense.entity";


@Entity('ordres_de_mission')
export class OrdreDeMission{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date_debut: Date;

    @Column()
    date_fin: Date;

    @Column()
    created_at: Date;

    @ManyToOne(()=>DocType, (doc_type)=>doc_type.ordre_de_mission)
    @JoinColumn({name: 'doc_type_id'})
    doc_type:DocType

    @OneToMany(()=>Depense, (depense)=>depense.ordre_de_mission)
    depenses:Depense[]
}