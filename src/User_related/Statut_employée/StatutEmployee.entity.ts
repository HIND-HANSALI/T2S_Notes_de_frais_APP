import { DepensePlafond } from "src/Documents_related/Depense/Depense_plafond/DepensePlafond.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { User } from "../User/User.entity";


@Entity('statuts_employee')
export class StatutEmployee{
      @PrimaryGeneratedColumn()
      id:number

      @Column()
      statut:string
   
      @OneToMany(()=>DepensePlafond, (depense_plafond)=>depense_plafond.statut_employee)
      depenses_plafond:DepensePlafond[]

      @OneToMany(()=>User, (user)=>user.statut_employee)
      users:User[]
}