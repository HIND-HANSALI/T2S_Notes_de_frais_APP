import { IsString,Length,IsNumber} from "class-validator";

export class CreateDepenseCategoriesDto{
    
    @IsString()
    @Length(3,20)
    name: string;

    @IsNumber()
    unit_price:number;
    
    @IsNumber()
    category_id:number;

}