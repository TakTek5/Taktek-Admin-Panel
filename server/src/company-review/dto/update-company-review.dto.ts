// update-company-review.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyReviewDto } from './create-company-review.dto';

export class UpdateCompanyReviewDto extends PartialType(CreateCompanyReviewDto) {}
