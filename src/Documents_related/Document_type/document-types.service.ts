import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {DocType} from './DocType.entity';
import {CreateDocumentTypesParams} from './types';
import {UpdateDocumentTypesParams} from './types';


@Injectable()
export class DocumentTypesService {

    constructor(@InjectRepository(DocType) private DocumentTypeRepository:Repository<DocType>,
    ){}

    getDocumentTypes(){
        return this.DocumentTypeRepository.find();
    }
    createDocumentTypes(createDocumentTypesParams:CreateDocumentTypesParams){
        const newType=this.DocumentTypeRepository.create(createDocumentTypesParams);
        return this.DocumentTypeRepository.save(newType);
    }
    updateDocumentTypes(id:number,updateDocumentTypesParams:UpdateDocumentTypesParams){
        return this.DocumentTypeRepository.update(id,updateDocumentTypesParams);
    }
    deleteDocumentTypes(id:number){
        return this.DocumentTypeRepository.delete(id);
    }
}
