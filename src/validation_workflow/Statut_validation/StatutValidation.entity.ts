import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('statut_validation')
export class StatutValidation{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    statut: string;
}