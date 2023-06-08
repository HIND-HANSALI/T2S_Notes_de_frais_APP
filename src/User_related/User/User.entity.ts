
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Division } from "../Division/Division.entity";
import { Role } from "../Role/Role.entity";
import { StatutEmployee } from "../Statut_employée/StatutEmployee.entity";


@Entity('users')
export class User{
      @PrimaryGeneratedColumn()
      id:number

      @Column()
      name:string

      @Column()
      email:string

      @Column()
      password:string

      @ManyToOne(()=>Role, (role)=>role.users)
      @JoinColumn({name: 'role_id'})
      role:Role

      @ManyToOne(()=>Division, (division)=>division.users)
      @JoinColumn({name: 'division_id'})
      division:Division

      @ManyToOne(()=>StatutEmployee, (statut_employee)=>statut_employee.users)
      @JoinColumn({name: 'statut_employee_id'})
      statut_employee:StatutEmployee
}