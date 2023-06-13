import { Controller,Get,Post,Body,ParseIntPipe,Param,Put,Delete } from '@nestjs/common';
import { NoteDeFraisService } from './note-de-frais.service';

@Controller('note-de-frais')
export class NoteDeFraisController {
    constructor(private noteDeFraisService:NoteDeFraisService){

    }
    @Get()
    getNoteDeFrais(){
        return this.noteDeFraisService.getNoteDeFrais();
    }
}
