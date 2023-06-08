import { IsString,IsNumber,Length} from "class-validator";

export class CreateDepenseCategoryDto{

    @IsString()
    @Length(3,20)
    name:string;

    @IsNumber()
    unit_price:number;
   
   
}