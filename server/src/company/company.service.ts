import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Company } from '@prisma/client';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    try {
      const { serviceIds, ...companyData } = createCompanyDto;

      return this.prisma.company.create({
        data: {
          ...companyData,
          services: {
            connect: serviceIds.map((id) => ({ id })),
          },
        },
        include: { services: true },
      });
    } catch (error) {
      throw new BadRequestException("Please verify your data and try again", error.message);
    }
  }

  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany({
      include: { services: true, technicians: true },
    });
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { services: true, technicians: true },
    });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    try {
      const { serviceIds, ...companyData } = updateCompanyDto;

      const company = await this.prisma.company.findUnique({ where: { id } });
      if (!company) {
        throw new NotFoundException(`Company with ID ${id} not found`);
      }

      const serviceUpdateData = serviceIds
      ? {
          set: serviceIds.map((id) => ({ id })),
        }
      : undefined;

      return this.prisma.company.update({
        where: { id },
        data: {
          ...companyData,
          services: serviceUpdateData,
        },
        include: { services: true },
      });
    } catch (error) {
      throw new BadRequestException("Please verify your data and try again", error.message);
    }
  }

  async remove(id: number): Promise<Company> {
    const company = await this.prisma.company.findUnique({ where: { id } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return this.prisma.company.delete({ where: { id } });
  }

  async addServiceToCompany(companyId: number, serviceId: number): Promise<Company> {
    const company = await this.prisma.company.findUnique({ where: { id: companyId } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${companyId} not found`);
    }

    return this.prisma.company.update({
      where: { id: companyId },
      data: {
        services: {
          connect: { id: serviceId },
        },
      },
      include: { services: true },
    });
  }

  async removeServiceFromCompany(companyId: number, serviceId: number): Promise<Company> {
    const company = await this.prisma.company.findUnique({ where: { id: companyId } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${companyId} not found`);
    }

    return this.prisma.company.update({
      where: { id: companyId },
      data: {
        services: {
          disconnect: { id: serviceId },
        },
      },
      include: { services: true },
    });
  }
}