import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CompanyReviewService } from './company-review.service';
import { CreateCompanyReviewDto } from './dto/create-company-review.dto';
import { UpdateCompanyReviewDto } from './dto/update-company-review.dto';

@Controller('company-reviews')
export class CompanyReviewController {
  constructor(private readonly companyReviewService: CompanyReviewService) {}

  @Post()
  create(@Body() createCompanyReviewDto: CreateCompanyReviewDto) {
    return this.companyReviewService.create(createCompanyReviewDto);
  }

  @Get()
  findAll() {
    return this.companyReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyReviewService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyReviewDto: UpdateCompanyReviewDto,
  ) {
    return this.companyReviewService.update(parseInt(id), updateCompanyReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyReviewService.remove(parseInt(id));
  }
}
