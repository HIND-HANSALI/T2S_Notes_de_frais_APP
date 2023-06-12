import { PickType } from '@nestjs/mapped-types';
import { CreateDocumentTypeDto } from './CreateDocumentType.dto';

export class UpdateDocumentTypeDto extends PickType(CreateDocumentTypeDto,['type']){

}