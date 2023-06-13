import { CreateDepensePlafondsDto } from "./CreateDepensePlafonds.dto";
import { PickType } from '@nestjs/mapped-types';

export class UpdateDepensePlafondsDto extends PickType(CreateDepensePlafondsDto,['plafond','category_id']){

}