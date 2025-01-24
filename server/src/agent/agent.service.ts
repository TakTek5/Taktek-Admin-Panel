// agent.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAgentDto: CreateAgentDto) {
    return this.prisma.agent.create({
      data: createAgentDto,
    });
  }

  async findAll() {
    return this.prisma.agent.findMany();
  }

  async findOne(id: number) {
    return this.prisma.agent.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAgentDto: UpdateAgentDto) {
    return this.prisma.agent.update({
      where: { id },
      data: updateAgentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.agent.delete({
      where: { id },
    });
  }
}
