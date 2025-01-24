import { Module } from '@nestjs/common';
import { UserReviewService } from './user-review.service';
import { UserReviewController } from './user-review.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UserReviewController],
  providers: [UserReviewService, PrismaService],
})
export class UserReviewModule {}
