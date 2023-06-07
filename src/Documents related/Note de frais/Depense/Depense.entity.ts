import { NoteDeFrais } from "src/Documents related/Note de frais/NoteDeFrais.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { DepenseCategory } from './Depense category/DepenseCategory.entity'
import { OrdreDeMission } from "src/Documents related/Ordre de mission/OrdreDeMission.entity";


@Entity('depenses')
export class Depense{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    justificatif:string

    @Column()
    created_at:Date
    
    @ManyToOne(()=>DepenseCategory, (category)=>category.depenses)
    @JoinColumn({ name: 'category_id' })
    category:DepenseCategory

    @ManyToOne(()=>NoteDeFrais, (noteDeFrais)=>noteDeFrais.depenses)
    @JoinColumn({ name: 'note_de_frais_id' })
    note_de_frais:NoteDeFrais

    @ManyToOne(()=>OrdreDeMission, (ordre_de_mission)=>ordre_de_mission.depenses)
    @JoinColumn({name: 'ordre_de_mission_id'})
    ordre_de_mission:OrdreDeMission
}
