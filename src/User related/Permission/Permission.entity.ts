import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Role } from "../Role/Role.entity";



@Entity('permissions')
export class Permission{
      @PrimaryGeneratedColumn()
      id:number

      @Column()
      permission:string

      @ManyToMany(()=>Role, (role)=>role.permissions)
      @JoinTable()
      roles:Role[]
}