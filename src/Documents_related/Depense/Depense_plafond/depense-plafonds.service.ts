import { Injectable,HttpException, HttpStatus } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { DepensePlafond } from './DepensePlafond.entity';
import { DepenseCategory } from '../Depense_category/DepenseCategory.entity';
import {CreateDepensePlafondsParams} from './types' ;
import {UpdateDepensePlafondsParams} from './types' ;


@Injectable()
export class DepensePlafondsService {
    constructor(@InjectRepository(DepensePlafond) private DepensePlafondRepository:Repository<DepensePlafond>,
                @InjectRepository(DepenseCategory) private DepenseCategoryRepository:Repository<DepenseCategory>,
    ){}
    getDepensePlafonds(){
        return this.DepensePlafondRepository.find({relations:['category']});
    }
    
    async createDepensePlafonds(createDepensePlafondsParams:CreateDepensePlafondsParams){
        const category=createDepensePlafondsParams.category_id;
        
        const depenseCategory = await this.DepenseCategoryRepository.findOneBy({id:category});
        
        const newDepensePlafond = this.DepensePlafondRepository.create({
            ...createDepensePlafondsParams,
            category: depenseCategory,
          });
        
        return this.DepensePlafondRepository.save(newDepensePlafond);

    }

    async updateDepensePlafonds(id:number,updateDepensePlafondsParams:UpdateDepensePlafondsParams){
        const plafond = await this.DepensePlafondRepository.findOneBy({id});

        if (!plafond) {
            throw new HttpException(
            'Plafond not found',
            HttpStatus.NOT_FOUND,
            );
        }
        const category=updateDepensePlafondsParams.category_id;
        
        const depenseCategory = await this.DepenseCategoryRepository.findOneBy({id:category});
        
        plafond.category = depenseCategory;
        plafond.plafond = updateDepensePlafondsParams.plafond;
        
        
        await this.DepensePlafondRepository.save(plafond);
    }




    deleteDepensePlafonds(id:number){
        return this.DepensePlafondRepository.delete(id);
    }

}
