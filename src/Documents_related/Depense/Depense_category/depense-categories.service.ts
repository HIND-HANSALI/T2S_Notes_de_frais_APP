import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {DepenseCategory} from './DepenseCategory.entity';
import {CreateDepenseCategoryParams} from './types';
import {UpdateDepenseCategoryParams} from './types';

@Injectable()
export class DepenseCategoriesService {
    constructor(@InjectRepository(DepenseCategory) private DepenseCategoryRepository:Repository<DepenseCategory>,
    ){}

    getDepenseCategories(){
        return this.DepenseCategoryRepository.find();
    }

    createDepenseCategories(createDepenseCategoryParams:CreateDepenseCategoryParams){
        const newCategorie=this.DepenseCategoryRepository.create(createDepenseCategoryParams);
        return this.DepenseCategoryRepository.save(newCategorie);
    }

    updateDepenseCategories(id:number,updateDepenseCategoryParams:UpdateDepenseCategoryParams){
        return this.DepenseCategoryRepository.update(id,updateDepenseCategoryParams);
    }
    deleteDepenseCategories(id:number){
        return this.DepenseCategoryRepository.delete(id);
    }
}
