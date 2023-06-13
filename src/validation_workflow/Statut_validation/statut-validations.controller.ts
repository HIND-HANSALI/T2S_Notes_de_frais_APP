import { Controller,Get,Post,Body,ParseIntPipe,Param,Put,Delete,ValidationPipe,UsePipes } from '@nestjs/common';
import {CreateStatutValidationDto} from './CreateStatutValidation.dto';
import { UpdateStatutValidationDto } from './UpdateStatutValidation.dto';
import { StatutValidationsService } from './statut-validations.service';

@Controller('statut-validations')
export class StatutValidationsController {
    constructor(private statutValidationsService:StatutValidationsService){

    }
    @Get()
    getStatutvalidations(){
        return this.statutValidationsService.getStatutvalidations();
    }
    @Post()
    createStatutvalidations(@Body() CreateStatutValidationDto:CreateStatutValidationDto){
        return this.statutValidationsService.createStatutvalidations(CreateStatutValidationDto);
    }
    @Put(':id')
    async updateStatutvalidations(@Param('id',ParseIntPipe) id:number,@Body() UpdateStatutValidationDto:UpdateStatutValidationDto){
        await this.statutValidationsService.updateStatutvalidation(id,UpdateStatutValidationDto);
    }
    @Delete(':id')
    async deleteStatutvalidations(@Param('id',ParseIntPipe) id:number){
        await this.statutValidationsService.deleteStatutvalidations(id);
    }
}
