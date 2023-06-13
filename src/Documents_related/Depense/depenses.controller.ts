import { Controller,Get,Post,Body,ParseIntPipe,Param,Put,Delete,ValidationPipe,UsePipes } from '@nestjs/common';
import { DepensesService } from './depenses.service';
import {CreateDepenseDto} from './CreateDepense.dto';
import {UpdateDepenseDto} from './UpdateDepense.dto';
// import {CreateDepenseCategoriesDto} from './CreateDepenseCategories.dto';

@Controller('depenses')
@UsePipes(ValidationPipe)
export class DepensesController {
    constructor(private depensesService:DepensesService){

    }
    @Get()
    getDepenses(){
        return this.depensesService.getDepenses();
    }
    @Post()
    createDepenses(@Body() CreateDepenseDto:CreateDepenseDto){
        return this.depensesService.createDepenses(CreateDepenseDto);
    }
    // @Post(':id/DepenseCategories')
    // createDepenseCategories(@Body() CreateDepenseCategoriesDto:CreateDepenseCategoriesDto){
    //     return this.depensesService.createDepenseCategories(id,CreateDepenseCategoriesDto);
    // }
    @Put(':id')
    async updateDepenses(@Param('id',ParseIntPipe) id:number,@Body() UpdateDepenseDto:UpdateDepenseDto){
        await this.depensesService.updateDepenses(id,UpdateDepenseDto);
    }
    @Delete(':id')
    async deleteDepenses(@Param('id',ParseIntPipe) id:number){
        await this.depensesService.deleteDepenses(id);
    }

}
