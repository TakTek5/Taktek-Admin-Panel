import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from '@prisma/client';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Review> {
    const numericId = parseInt(id, 10);
    return this.reviewService.findOne(numericId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto): Promise<Review> {
    const numericId = parseInt(id, 10);
    return this.reviewService.update(numericId, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Review> {
    const numericId = parseInt(id, 10);
    return this.reviewService.remove(numericId);
  }
}