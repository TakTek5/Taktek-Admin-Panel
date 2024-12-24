import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ServiceProvider } from '@prisma/client';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Injectable()
export class ServiceProviderService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider> {
    return this.prisma.serviceProvider.create({
      data: createServiceProviderDto
    });
  }

  async findAll(): Promise<ServiceProvider[]> {
    return this.prisma.serviceProvider.findMany();
  }

  async findOne(id: number): Promise<ServiceProvider> {
    return this.prisma.serviceProvider.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateServiceProviderDto: UpdateServiceProviderDto): Promise<ServiceProvider> {
    return this.prisma.serviceProvider.update({
      where: { id },
      data: updateServiceProviderDto,
    });
  }

  async remove(id: number): Promise<ServiceProvider> {
    return this.prisma.serviceProvider.delete({
      where: { id },
    });
  }
}