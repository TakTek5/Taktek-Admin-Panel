import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicianDto } from './create-technician.dto';
import { IsOptional, IsArray, ArrayNotEmpty, IsInt } from 'class-validator';

export class UpdateTechnicianDto extends PartialType(CreateTechnicianDto) {}
