import { IsString,Length} from "class-validator";

export class CreateDocumentTypeDto{

    @IsString()
    @Length(3,20)
    type:string;
  
}