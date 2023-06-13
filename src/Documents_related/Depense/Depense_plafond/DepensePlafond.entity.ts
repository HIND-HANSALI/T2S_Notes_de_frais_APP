import { Entity, PrimaryGeneratedColumn, Column,OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { DepenseCategory } from "../Depense_category/DepenseCategory.entity";
import { StatutEmployee } from "src/User_related/Statut_employée/StatutEmployee.entity";


@Entity('depense_plafonds')
export class DepensePlafond{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    plafond:number

    @OneToOne(()=>DepenseCategory)
    @JoinColumn({name: 'category_id'})
    category:DepenseCategory

    @ManyToOne(()=>StatutEmployee, (statut_employee)=>statut_employee.depenses_plafond)
    @JoinColumn({name: 'statut_employee_id'})
    statut_employee:StatutEmployee

}