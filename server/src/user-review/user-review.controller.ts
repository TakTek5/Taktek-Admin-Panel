import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserReviewService } from './user-review.service';
import { CreateUserReviewDto } from './dto/create-user-review.dto';
import { UpdateUserReviewDto } from './dto/update-user-review.dto';

@Controller('user-reviews')
export class UserReviewController {
  constructor(private readonly UserReviewService: UserReviewService) {}

  @Post()
  create(@Body() createUserReviewDto: CreateUserReviewDto) {
    return this.UserReviewService.create(createUserReviewDto);
  }

  @Get()
  findAll() {
    return this.UserReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UserReviewService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserReviewDto: UpdateUserReviewDto,
  ) {
    return this.UserReviewService.update(parseInt(id), updateUserReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UserReviewService.remove(parseInt(id));
  }
}
