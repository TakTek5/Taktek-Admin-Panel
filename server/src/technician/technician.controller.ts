import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TechnicianService } from './technician.service';
import { Technician } from '@prisma/client';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';

@Controller('technicians')
export class TechnicianController {
  constructor(private readonly technicianService: TechnicianService) {}

  @Post()
  create(@Body() createTechnicianDto: CreateTechnicianDto) {
    return this.technicianService.create(createTechnicianDto);
  }

  @Get()
  async findAll(): Promise<Technician[]> {
    return this.technicianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.technicianService.findOne(numericId);
  }

  @Get('service/:serviceId')
  findByService(@Param('serviceId') serviceId: string) {
    const numericId = parseInt(serviceId, 10);
    return this.technicianService.findByService(numericId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnicianDto: UpdateTechnicianDto,
  ) {
    const numericId = parseInt(id, 10);
    return this.technicianService.update(numericId, updateTechnicianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.technicianService.remove(numericId);
  }
}