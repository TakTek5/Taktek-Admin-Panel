import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TechnicianReviewService } from './technician-review.service';
import { CreateTechnicianReviewDto } from './dto/create-technician-review.dto';
import { UpdateTechnicianReviewDto } from './dto/update-technician-review.dto';

@Controller('technician-reviews')
export class TechnicianReviewController {
  constructor(private readonly TechnicianReviewService: TechnicianReviewService) {}

  @Post()
  create(@Body() createTechnicianReviewDto: CreateTechnicianReviewDto) {
    return this.TechnicianReviewService.create(createTechnicianReviewDto);
  }

  @Get()
  findAll() {
    return this.TechnicianReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TechnicianReviewService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnicianReviewDto: UpdateTechnicianReviewDto,
  ) {
    return this.TechnicianReviewService.update(parseInt(id), updateTechnicianReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TechnicianReviewService.remove(parseInt(id));
  }
}
