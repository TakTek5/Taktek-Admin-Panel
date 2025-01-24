import { Module } from '@nestjs/common';
import { CompanyReviewService } from './company-review.service';
import { CompanyReviewController } from './company-review.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CompanyReviewController],
  providers: [CompanyReviewService, PrismaService],
})
export class CompanyReviewModule {}
