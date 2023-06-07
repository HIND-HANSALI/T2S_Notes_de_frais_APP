import {Column,Entity,PrimaryGeneratedColumn,JoinColumn, OneToOne,OneToMany,ManyToOne,JoinTable} from'typeorm';
import { DocType } from '../Document type/DocType.entity';
import { OrdreDeMission } from '../Ordre de mission/OrdreDeMission.entity';

@Entity('demandes_d_avance')
export class DemandeAvance{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    montant:number

    @Column()
    created_at: Date;

    @OneToOne(()=>OrdreDeMission, {cascade: true})
    @JoinColumn({name: 'ordre_de_mission_id'})
    OrdreDeMission:OrdreDeMission

    @ManyToOne(()=>DocType, (doc_type)=>doc_type.demande_d_avance)
    @JoinColumn({name: 'doc_type_id'})
    doc_type:DocType
}