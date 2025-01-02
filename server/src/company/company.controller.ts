import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from '@prisma/client';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  async findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.companyService.findOne(numericId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    const numericId = parseInt(id, 10);
    return this.companyService.update(numericId, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.companyService.remove(numericId);
  }

  @Put(':companyId/services/:serviceId')
  addServiceToCompany(
    @Param('companyId') companyId: string,
    @Param('serviceId') serviceId: string
  ) {
    const numericCompanyId = parseInt(companyId, 10);
    const numericServiceId = parseInt(serviceId, 10);
    return this.companyService.addServiceToCompany(numericCompanyId, numericServiceId);
  }

  @Delete(':companyId/services/:serviceId')
  removeServiceFromCompany(
    @Param('companyId') companyId: string,
    @Param('serviceId') serviceId: string
  ) {
    const numericCompanyId = parseInt(companyId, 10);
    const numericServiceId = parseInt(serviceId, 10);
    return this.companyService.removeServiceFromCompany(numericCompanyId, numericServiceId);
  }
}