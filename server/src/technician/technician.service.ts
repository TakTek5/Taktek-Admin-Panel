import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Technician } from '@prisma/client';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';

@Injectable()
export class TechnicianService {
  constructor(private prisma: PrismaService) {}

  async create(createTechnicianDto: CreateTechnicianDto): Promise<Technician> {
    try {
      const { companyId, serviceIds, ...technicianData } = createTechnicianDto;

      const company = await this.prisma.company.findUnique({
        where: { id: companyId },
        include: { services: true },
      });
    
      if (!company) {
        throw new NotFoundException(`Company with ID ${companyId} not found`);
      }
    
      const validServiceIds = company.services.map(service => service.id);
      const invalidServiceIds = serviceIds.filter(id => !validServiceIds.includes(id));
    
      if (invalidServiceIds.length > 0) {
        throw new BadRequestException(
          `These services do not belong to the company: ${invalidServiceIds.join(', ')}`,
        );
      }
    
      return this.prisma.technician.create({
        data: {
          ...technicianData,
          company: { connect: { id: companyId } },
          services: {
            connect: serviceIds.map(id => ({ id })),
          },
        },
        include: { services: true },
      });
    } catch (error) {
      throw new BadRequestException("Please verify your data and try again", error.message);
    }
  }

  async findAll(): Promise<Technician[]> {
    return this.prisma.technician.findMany({
      include: { services:true, company: { include: { services: true }}, reviews: true, leads: true },
    });
  }

  async findOne(id: number): Promise<Technician> {
    const technician = await this.prisma.technician.findUnique({
      where: { id },
      include: { services: true, company: { include: { services: true }}, reviews: true, leads: true },
    });
    if (!technician) {
      throw new NotFoundException(`Technician with ID ${id} not found`);
    }
    return technician;
  }

  async findByService(serviceId: number): Promise<Technician[]> {
    return this.prisma.technician.findMany({
      where: { services: {
        some: { id: serviceId }
      } , status: true },
      include: { company: {
        include: { services: true }
      }, reviews: true, leads: true },
    });
  }

  async update(id: number, updateTechnicianDto: UpdateTechnicianDto): Promise<Technician> {
    try{
      const { serviceIds, ...technicianData } = updateTechnicianDto;
    
      const technician = await this.prisma.technician.findUnique({
        where: { id },
        include: { company: { include: { services: true } } },
      });
    
      if (!technician) {
        throw new NotFoundException(`Technician with ID ${id} not found`);
      }
    
      const { company } = technician;
    
      if (!company) {
        throw new NotFoundException(`Technician with ID ${id} is not associated with a company`);
      }
    
      if (serviceIds) {
        const validServiceIds = company.services.map((service) => service.id);
        const invalidServiceIds = serviceIds.filter((id) => !validServiceIds.includes(id));
    
        if (invalidServiceIds.length > 0) {
          throw new Error(
            `The following service IDs are invalid for this company: ${invalidServiceIds.join(", ")}`
          );
        }
      }

      const serviceUpdateData = serviceIds
      ? {
        set: serviceIds.map((id) => ({ id })),
      }
      : undefined;

      return this.prisma.technician.update({
        where: { id },
        data: {
          ...technicianData,
          services: serviceUpdateData,
        },
        include: {
          services: true,
          company: { include: { services: true } },
        },
      });
    } catch (error) {
      throw new BadRequestException("Please verify your data and try again", error.message);
    }
  }

  async remove(id: number): Promise<Technician> {
    const technician = await this.prisma.technician.findUnique({ where: { id } });
    if (!technician) {
      throw new NotFoundException(`Technician with ID ${id} not found`);
    }
    return this.prisma.technician.delete({ where: { id } });
  }
}