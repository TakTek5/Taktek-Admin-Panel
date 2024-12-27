import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Lead } from '@prisma/client';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  async create(createLeadDto: CreateLeadDto): Promise<Lead> {
    return this.prisma.lead.create({
      data: createLeadDto
    });
  }

  async findAll(): Promise<Lead[]> {
    return this.prisma.lead.findMany({
      include: { user: true, technician: true },
    });
  }

  async findOne(id: number): Promise<Lead> {
    const lead = await this.prisma.lead.findUnique({
      where: { id },
      include: { user: true, technician: true },
    });
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    return lead;
  }

  async update(id: number, updateLeadDto: UpdateLeadDto): Promise<Lead> {
    const lead = await this.prisma.lead.findUnique({ where: { id } });
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    return this.prisma.lead.update({
      where: { id },
      data: updateLeadDto,
    });
  }

  async remove(id: number): Promise<Lead> {
    const lead = await this.prisma.lead.findUnique({ where: { id } });
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    return this.prisma.lead.delete({ where: { id } });
  }
}