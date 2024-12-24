import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Review } from '@prisma/client';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    return this.prisma.review.create({
      data: createReviewDto,
    });
  }

  async findAll(): Promise<Review[]> {
    return this.prisma.review.findMany();
  }

  async findOne(id: number): Promise<Review> {
    return this.prisma.review.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
    return this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  async remove(id: number): Promise<Review> {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}