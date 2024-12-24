import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from '@prisma/client';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Transaction> {
    const numericId = parseInt(id, 10);
    return this.transactionService.findOne(numericId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    const numericId = parseInt(id, 10);
    return this.transactionService.update(numericId, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Transaction> {
    const numericId = parseInt(id, 10);
    return this.transactionService.remove(numericId);
  }
}
