import { Controller,Get,Post,Body,ParseIntPipe,Param,Put,Delete,ValidationPipe,UsePipes } from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import {CreateDocumentTypeDto} from './CreateDocumentType.dto';
import {UpdateDocumentTypeDto} from './UpdateDocumentType.dto';


@Controller('document-types')
@UsePipes(ValidationPipe)
export class DocumentTypesController {
    constructor(private documentTypesService:DocumentTypesService){

    }
    @Get()
    getDocumentTypes(){
        return this.documentTypesService.getDocumentTypes();
    }
    @Post()
    createDocumentTypes(@Body() CreateDocumentTypeDto:CreateDocumentTypeDto ){
        return this.documentTypesService.createDocumentTypes(CreateDocumentTypeDto);
    }

    @Put(':id')
    async updateDocumentTypes(@Param('id',ParseIntPipe) id:number,@Body() UpdateDocumentTypeDto:UpdateDocumentTypeDto){
        await this.documentTypesService.updateDocumentTypes(id,UpdateDocumentTypeDto);

    }

    @Delete(':id')
    async deleteDocumentTypes(@Param('id',ParseIntPipe) id:number){
        await this.documentTypesService.deleteDocumentTypes(id);
    }
}
