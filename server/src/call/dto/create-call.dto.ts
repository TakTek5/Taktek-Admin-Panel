import { IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateCallDto {
  @IsInt()
  userId: number;

  @IsInt()
  technicianId: number;

  @IsOptional()
  @IsDate()
  date?: Date;
}
