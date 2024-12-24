import { Module } from '@nestjs/common';
import { CallService } from './call.service';
import { CallController } from './call.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CallController],
  providers: [CallService, PrismaService],
})
export class CallModule {}