import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { User } from "../User/User.entity";


@Entity('divisions')
export class Division{
      @PrimaryGeneratedColumn()
      id:number

      @Column()
      name:string
       
      @OneToMany(()=>User, (user)=>user.division)
      users:User[]
}