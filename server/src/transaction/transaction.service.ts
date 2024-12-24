import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Transaction } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: createTransactionDto,
    });
  }

  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  async findOne(id: number): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    return this.prisma.transaction.update({
      where: { id },
      data: updateTransactionDto,
    });
  }

  async remove(id: number): Promise<Transaction> {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}