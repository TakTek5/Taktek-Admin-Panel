import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserReviewDto } from './dto/create-user-review.dto';
import { UpdateUserReviewDto } from './dto/update-user-review.dto';

@Injectable()
export class UserReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserReviewDto: CreateUserReviewDto) {
    return this.prisma.userReview.create({
      data: createUserReviewDto,
    });
  }

  async findAll() {
    return this.prisma.userReview.findMany();
  }

  async findOne(id: number) {
    const UserReview = await this.prisma.userReview.findUnique({ where: { id } });
    if (!UserReview) {
      throw new NotFoundException(`UserReview with ID ${id} not found`);
    }
    return UserReview;
  }

  async update(id: number, updateUserReviewDto: UpdateUserReviewDto) {
    const UserReview = await this.prisma.userReview.findUnique({ where: { id } });
    if (!UserReview) {
      throw new NotFoundException(`UserReview with ID ${id} not found`);
    }

    return this.prisma.userReview.update({
      where: { id },
      data: updateUserReviewDto,
    });
  }

  async remove(id: number) {
    const UserReview = await this.prisma.userReview.findUnique({ where: { id } });
    if (!UserReview) {
      throw new NotFoundException(`UserReview with ID ${id} not found`);
    }

    return this.prisma.userReview.delete({ where: { id } });
  }
}
