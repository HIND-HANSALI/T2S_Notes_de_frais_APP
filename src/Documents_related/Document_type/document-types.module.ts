import { Module } from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import {DocumentTypesController} from './document-types.controller';
import {DocType} from './DocType.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([DocType])],
  controllers:[DocumentTypesController],
  providers: [DocumentTypesService]
})
export class DocumentTypesModule {}
