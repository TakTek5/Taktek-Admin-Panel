import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Technician } from '@prisma/client';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';

@Injectable()
export class TechnicianService {
  constructor(private prisma: PrismaService) {}

  async create(createTechnicianDto: CreateTechnicianDto): Promise<Technician> {
    return this.prisma.technician.create({
      data: createTechnicianDto
    });
  }

  async findAll(): Promise<Technician[]> {
    return this.prisma.technician.findMany({
      include: { company: true, reviews: true, leads: true },
    });
  }

  async findOne(id: number): Promise<Technician> {
    const technician = await this.prisma.technician.findUnique({
      where: { id },
      include: { company: true, reviews: true, leads: true },
    });
    if (!technician) {
      throw new NotFoundException(`Technician with ID ${id} not found`);
    }
    return technician;
  }

  async findByService(serviceId: number): Promise<Technician[]> {
    return this.prisma.technician.findMany({
      where: { company: { serviceId }, status: true },
      include: { company: true, reviews: true, leads: true },
    });
  }

  async update(
    id: number,
    updateTechnicianDto: UpdateTechnicianDto,
  ): Promise<Technician> {
    const technician = await this.prisma.technician.findUnique({ where: { id } });
    if (!technician) {
      throw new NotFoundException(`Technician with ID ${id} not found`);
    }
    return this.prisma.technician.update({
      where: { id },
      data: updateTechnicianDto,
    });
  }

  async remove(id: number): Promise<Technician> {
    const technician = await this.prisma.technician.findUnique({ where: { id } });
    if (!technician) {
      throw new NotFoundException(`Technician with ID ${id} not found`);
    }
    return this.prisma.technician.delete({ where: { id } });
  }
}