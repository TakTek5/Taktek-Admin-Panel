import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CallService } from './call.service';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';
import { Call } from '@prisma/client';

@Controller('calls')
export class CallController {
  constructor(private readonly callService: CallService) {}

  @Post()
  create(@Body() createCallDto: CreateCallDto): Promise<Call> {
    return this.callService.create(createCallDto);
  }

  @Get()
  findAll(): Promise<Call[]> {
    return this.callService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Call> {
    const numericId = parseInt(id, 10);
    return this.callService.findOne(numericId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCallDto: UpdateCallDto): Promise<Call> {
    const numericId = parseInt(id, 10);
    return this.callService.update(numericId, updateCallDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Call> {
    const numericId = parseInt(id, 10);
    return this.callService.remove(numericId);
  }
}