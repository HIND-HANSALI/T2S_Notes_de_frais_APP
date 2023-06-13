import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {NoteDeFrais} from './NoteDeFrais.entity';
@Injectable()
export class NoteDeFraisService{
    constructor(@InjectRepository(NoteDeFrais) private NoteDeFraisRepository:Repository<NoteDeFrais>,
    ){}
    getNoteDeFrais(){
        return this.NoteDeFraisRepository.find();
    }
}
