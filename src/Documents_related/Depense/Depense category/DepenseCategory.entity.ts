import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Depense } from "../Depense.entity";



@Entity('depense_categories')
export class DepenseCategory{
      @PrimaryGeneratedColumn()
      id:number

      @Column()
      name:string

      @Column()
      unit_price:number

      @OneToMany(()=>Depense, (depense)=>depense.category)
      depenses:Depense[]
}