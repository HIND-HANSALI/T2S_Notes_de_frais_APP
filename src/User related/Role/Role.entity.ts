import { Entity, PrimaryGeneratedColumn, Column, ManyToMany,OneToMany, JoinColumn } from "typeorm";
import { Permission } from "../Permission/Permission.entity";
import { User } from "../User/User.entity";



@Entity('roles')
export class Role{
      @PrimaryGeneratedColumn()
      id:number

      @Column()
      role:string

      @ManyToMany(()=>Permission, (permission)=>permission.roles)
      permissions:Permission[]

      @OneToMany(()=>User, (user)=>user.role)
      users:User[]
}