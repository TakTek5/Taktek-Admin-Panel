// create-company-review.dto.ts
import { IsString, IsOptional, IsNumber, Min, Max, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCompanyReviewDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsInt()
  @IsNotEmpty()
  companyId: string;
}
