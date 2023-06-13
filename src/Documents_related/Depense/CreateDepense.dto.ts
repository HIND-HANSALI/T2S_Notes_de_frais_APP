import { IsString,Length,IsNumber} from "class-validator";

export class CreateDepenseDto{

    @IsString()
    @Length(3,20)
    name:string;

    justificatif:string;

    created_at:Date;
  
    @IsNumber()
    category_id: number;
}