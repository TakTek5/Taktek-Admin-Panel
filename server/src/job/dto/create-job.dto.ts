// src/jobs/dto/create-job.dto.ts
import { IsInt, IsNotEmpty, IsOptional, IsBoolean, IsDate } from 'class-validator';

export class CreateJobDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  technicianId: number;

  @IsInt()
  @IsNotEmpty()
  serviceId: number;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsDate()
  date?: Date;
}
