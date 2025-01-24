import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicianReviewDto } from './create-technician-review.dto';

export class UpdateTechnicianReviewDto extends PartialType(CreateTechnicianReviewDto) {}
