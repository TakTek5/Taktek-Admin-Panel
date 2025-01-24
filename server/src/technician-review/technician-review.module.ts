import { Module } from '@nestjs/common';
import { TechnicianReviewService } from './technician-review.service';
import { TechnicianReviewController } from './technician-review.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [TechnicianReviewController],
  providers: [TechnicianReviewService, PrismaService],
})
export class TechnicianReviewModule {}
