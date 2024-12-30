import { Module } from '@nestjs/common';
import { TechnicianService } from './technician.service';
import { TechnicianController } from './technician.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TechnicianController],
  providers: [TechnicianService, PrismaService],
})
export class TechnicianModule {}