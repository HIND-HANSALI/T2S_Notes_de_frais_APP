import {Column,Entity,PrimaryGeneratedColumn,JoinColumn, OneToOne,OneToMany,ManyToMany,JoinTable} from'typeorm';
import { DemandeAvance } from '../Demande_d_avance/DemandeDavance.entity';
import { NoteDeFrais } from '../Note_de_frais/NoteDeFrais.entity';
import { OrdreDeMission } from '../Ordre_de_mission/OrdreDeMission.entity';


@Entity('doc_types')
export class DocType{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    type: string;

    @OneToMany(()=>DemandeAvance, (demande_avance)=>demande_avance.doc_type)
    demande_d_avance:DemandeAvance[]

    @OneToMany(()=>OrdreDeMission, (ordre_de_mission)=>ordre_de_mission.doc_type)
    ordre_de_mission:OrdreDeMission[]

    @OneToMany(()=>NoteDeFrais, (note_de_frais)=>note_de_frais.doc_type)
    note_de_frais:NoteDeFrais[]
}