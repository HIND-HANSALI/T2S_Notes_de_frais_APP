import { IsString,Length,IsNumber} from "class-validator";

export class CreateDepensePlafondsDto{
  
    @IsNumber()
    plafond:number;
    
    @IsNumber()
    category_id: number;

}