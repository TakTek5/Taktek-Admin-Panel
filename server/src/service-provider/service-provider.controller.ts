import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProvider } from '@prisma/client';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Controller('service-providers')
export class ServiceProviderController {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  @Post()
  async create(@Body() createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider> {
    return this.serviceProviderService.create(createServiceProviderDto);
  }

  @Get()
  async findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ServiceProvider> {
    const numericId = parseInt(id, 10);
    return this.serviceProviderService.findOne(numericId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServiceProviderDto: UpdateServiceProviderDto): Promise<ServiceProvider> {
    const numericId = parseInt(id, 10);
    return this.serviceProviderService.update(numericId, updateServiceProviderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ServiceProvider> {
    const numericId = parseInt(id, 10);
    return this.serviceProviderService.remove(numericId);
  }
}