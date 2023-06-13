import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { StatutValidation } from './StatutValidation.entity';
import {CreateStatutValidationParams} from './types';
import {UpdateStatutValidationParams} from './types'

@Injectable()
export class StatutValidationsService {
    constructor(@InjectRepository(StatutValidation) private StatutValidationRepository:Repository<StatutValidation>){}
    
    getStatutvalidations(){
        return this.StatutValidationRepository.find();
    }
    createStatutvalidations(createStatutValidationParams:CreateStatutValidationParams){
        const newStatut=this.StatutValidationRepository.create(createStatutValidationParams);
        return this.StatutValidationRepository.save(newStatut);
    }
    updateStatutvalidation(id:number,updateStatutValidationParams:UpdateStatutValidationParams){
        return this.StatutValidationRepository.update(id,updateStatutValidationParams);
    }
    deleteStatutvalidations(id:number){
        return this.StatutValidationRepository.delete(id);
    }
}
