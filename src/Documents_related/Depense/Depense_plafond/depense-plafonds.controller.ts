import { Controller,Get,Post,Body,ParseIntPipe,Param,Put,Delete,ValidationPipe,UsePipes } from '@nestjs/common';


import { DepensePlafondsService } from './depense-plafonds.service';
import { CreateDepensePlafondsDto } from './CreateDepensePlafonds.dto';
import { UpdateDepensePlafondsDto } from './UpdateDepensePlafonds.dto';

@Controller('depense-plafonds')
export class DepensePlafondsController {
    constructor(private depensePlafondsService:DepensePlafondsService){

    }
    @Get()
    getDepensePlafonds(){
        return this.depensePlafondsService.getDepensePlafonds();
    }
    @Post()
    createDepensePlafonds(@Body() CreateDepensePlafondsDto:CreateDepensePlafondsDto){
        return this.depensePlafondsService.createDepensePlafonds(CreateDepensePlafondsDto);
    }

    @Put(':id')
    async updateDepensePlafonds(@Param('id',ParseIntPipe) id:number,@Body() UpdateDepensePlafondsDto:UpdateDepensePlafondsDto){
        await this.depensePlafondsService.updateDepensePlafonds(id,UpdateDepensePlafondsDto);
    }
    @Delete(':id')
    async deleteDepensePlafonds(@Param('id',ParseIntPipe) id:number){
        await this.depensePlafondsService.deleteDepensePlafonds(id);
    }

}
