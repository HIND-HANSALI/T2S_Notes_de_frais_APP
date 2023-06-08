// import { PartialType } from "@nestjs/mapped-types";
import { PickType } from '@nestjs/mapped-types';
import { CreateDepenseCategoryDto } from './CreateDepenseCategorie.dto';

export class UpdateDepenseCategoryDto extends PickType(CreateDepenseCategoryDto,['name', 'unit_price']){

}