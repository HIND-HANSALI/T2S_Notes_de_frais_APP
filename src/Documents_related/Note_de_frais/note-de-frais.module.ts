import { Module } from '@nestjs/common';
import { NoteDeFraisService } from './note-de-frais.service';
import {NoteDeFraisController} from './note-de-frais.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NoteDeFrais} from './NoteDeFrais.entity';
@Module({
    imports:[TypeOrmModule.forFeature([NoteDeFrais])],
    controllers: [NoteDeFraisController],
    providers: [NoteDeFraisService]
})
export class NoteDeFraisModule {}
