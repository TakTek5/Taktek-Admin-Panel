import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CallService } from './call.service';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';

@Controller('calls')
export class CallController {
  constructor(private readonly callsService: CallService) {}

  @Post()
  async create(@Body() createCallDto: CreateCallDto) {
    return this.callsService.create(createCallDto);
  }

  @Get()
  async findAll() {
    return this.callsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.callsService.findOne(parseInt(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCallDto: UpdateCallDto,
  ) {
    return this.callsService.update(parseInt(id), updateCallDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.callsService.remove(parseInt(id));
  }
}
