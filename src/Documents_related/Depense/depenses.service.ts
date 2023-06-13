import { Injectable,HttpException, HttpStatus } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Depense} from './Depense.entity';
import {DepenseCategory} from '../Depense/Depense_category/DepenseCategory.entity';
import {CreateDepensesParams} from './types';
import {UpdateDepensesParams} from './types';
// import {CreateDepenseCategoriesParams} from './types';
@Injectable()
export class DepensesService {
    constructor(@InjectRepository(Depense) private DepenseRepository:Repository<Depense>,
    @InjectRepository(DepenseCategory) private DepenseCategoryRepository:Repository<DepenseCategory>,
    ){}

    getDepenses(){
        return this.DepenseRepository.find({relations:['category']});
    }
    // createDepenses(createDepensesParams:CreateDepensesParams){
    //     const newDepense=this.DepenseRepository.create(createDepensesParams);
    //     return this.DepenseRepository.save( newDepense);
    // }

    async createDepenses(createDepensesParams:CreateDepensesParams){
        const category=createDepensesParams.category_id;
        
        const depenseCategory = await this.DepenseCategoryRepository.findOneBy({id:category});
        
        const newDepense = this.DepenseRepository.create({
            ...createDepensesParams,
            category: depenseCategory,
          });
        
        return this.DepenseRepository.save(newDepense);

    }

    async updateDepenses(id:number,updateDepensesParams:UpdateDepensesParams){
        const depense = await this.DepenseRepository.findOneBy({id});

        if (!depense) {
            throw new HttpException(
            'Depense not found',
            HttpStatus.NOT_FOUND,
            );
        }
        const category=updateDepensesParams.category_id;
        
        const depenseCategory = await this.DepenseCategoryRepository.findOneBy({id:category});
        
        depense.category = depenseCategory;
        depense.name = updateDepensesParams.name;
        depense.justificatif = updateDepensesParams.justificatif;
        depense.created_at = updateDepensesParams.created_at;

        await this.DepenseRepository.save(depense);

       
  
        // return this.DepenseRepository.update(id,{...updateDepensesParams,category: depenseCategory});
    }
   


    // updateDepenses(id:number,updateDepensesParams:UpdateDepensesParams){
    //     return this.DepenseRepository.update(id,updateDepensesParams);
    // }
    deleteDepenses(id:number){
        return this.DepenseRepository.delete(id);
    }

}
