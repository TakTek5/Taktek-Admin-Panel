import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompanyReviewDto } from './dto/create-company-review.dto';
import { UpdateCompanyReviewDto } from './dto/update-company-review.dto';

@Injectable()
export class CompanyReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCompanyReviewDto: CreateCompanyReviewDto) {
    return this.prisma.companyReview.create({
      data: createCompanyReviewDto,
    });
  }

  async findAll() {
    return this.prisma.companyReview.findMany();
  }

  async findOne(id: number) {
    const companyReview = await this.prisma.companyReview.findUnique({ where: { id } });
    if (!companyReview) {
      throw new NotFoundException(`CompanyReview with ID ${id} not found`);
    }
    return companyReview;
  }

  async update(id: number, updateCompanyReviewDto: UpdateCompanyReviewDto) {
    const companyReview = await this.prisma.companyReview.findUnique({ where: { id } });
    if (!companyReview) {
      throw new NotFoundException(`CompanyReview with ID ${id} not found`);
    }

    return this.prisma.companyReview.update({
      where: { id },
      data: updateCompanyReviewDto,
    });
  }

  async remove(id: number) {
    const companyReview = await this.prisma.companyReview.findUnique({ where: { id } });
    if (!companyReview) {
      throw new NotFoundException(`CompanyReview with ID ${id} not found`);
    }

    return this.prisma.companyReview.delete({ where: { id } });
  }
}
