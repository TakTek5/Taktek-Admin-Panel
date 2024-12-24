import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Call } from '@prisma/client';
import { CreateCallDto } from './dto/create-call.dto';
import { UpdateCallDto } from './dto/update-call.dto';

@Injectable()
export class CallService {
  constructor(private prisma: PrismaService) {}

  async create(createCallDto: CreateCallDto): Promise<Call> {
    return this.prisma.call.create({
      data: createCallDto,
    });
  }

  async findAll(): Promise<Call[]> {
    return this.prisma.call.findMany();
  }

  async findOne(id: number): Promise<Call> {
    return this.prisma.call.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCallDto: UpdateCallDto): Promise<Call> {
    return this.prisma.call.update({
      where: { id },
      data: updateCallDto,
    });
  }

  async remove(id: number): Promise<Call> {
    return this.prisma.call.delete({
      where: { id },
    });
  }
}