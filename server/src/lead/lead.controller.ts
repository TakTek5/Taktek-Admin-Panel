import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LeadService } from './lead.service';
import { Lead } from '@prisma/client';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto) {
    return this.leadService.create(createLeadDto);
  }

  @Get()
  async findAll(): Promise<Lead[]> {
    return this.leadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.leadService.findOne(numericId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLeadDto: UpdateLeadDto) {
    const numericId = parseInt(id, 10);
    return this.leadService.update(numericId, updateLeadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.leadService.remove(numericId);
  }
}