import { PickType } from '@nestjs/mapped-types';
import { CreateDepenseDto } from './CreateDepense.dto';

export class UpdateDepenseDto extends PickType(CreateDepenseDto,['name','justificatif','created_at','category_id']){

}