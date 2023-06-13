import { IsString,Length,IsNumber} from "class-validator";

export class CreateStatutValidationDto{

    @IsString()
    @Length(3,20)
    statut:string;

    
}