import { Controller,Get,Post,Body,ParseIntPipe,Param,Put,Delete,ValidationPipe,UsePipes } from '@nestjs/common';
import { DepenseCategoriesService } from './depense-categories.service';
import {CreateDepenseCategoryDto} from './CreateDepenseCategorie.dto';
import {UpdateDepenseCategoryDto} from './UpdateDepenseCategorie.dto';

@Controller('depense-categories')
@UsePipes(ValidationPipe) 
export class DepenseCategoriesController{
    constructor(private depenseCategoriesService:DepenseCategoriesService){

    }
    @Get()
    getDepenseCategories(){
        return this.depenseCategoriesService.getDepenseCategories();
    }

    @Post()
    createDepenseCategories(@Body() CreateDepenseCategoryDto:CreateDepenseCategoryDto){
        return this.depenseCategoriesService.createDepenseCategories(CreateDepenseCategoryDto);
    }

    @Put(':id')
    async updateDepenseCategories(@Param('id',ParseIntPipe) id:number,@Body() UpdateDepenseCategoryDto:UpdateDepenseCategoryDto){
       await this.depenseCategoriesService.updateDepenseCategories(id,UpdateDepenseCategoryDto);
    }

    @Delete(':id')
    async deleteDepenseCategories(@Param('id',ParseIntPipe) id:number){
        await this.depenseCategoriesService.deleteDepenseCategories(id);
     }

}
