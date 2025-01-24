import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
  import { CategoryService } from './category.service';
  import { CreateCategoryDto } from './dto/create-category.dto';
  import { UpdateCategoryDto } from './dto/update-category.dto';
  
  @Controller('categories')
  export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
  
    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto) {
      return this.categoryService.create(createCategoryDto);
    }
  
    @Get()
    async findAll() {
      return this.categoryService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return this.categoryService.findOne(id);
    }
  
    @Patch(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateCategoryDto: UpdateCategoryDto,
    ) {
      return this.categoryService.update(id, updateCategoryDto);
    }
  
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      return this.categoryService.remove(id);
    }
  }
  