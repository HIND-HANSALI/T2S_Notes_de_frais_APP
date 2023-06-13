import { PickType } from '@nestjs/mapped-types';
import { CreateStatutValidationDto } from './CreateStatutValidation.dto';

export class UpdateStatutValidationDto extends PickType(CreateStatutValidationDto,['statut']){

}