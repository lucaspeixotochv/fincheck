import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: Prisma.TransactionCreateArgs) {
    return await this.prisma.transaction.create(createDto);
  }

  async findMany(findManyDto: Prisma.TransactionFindManyArgs) {
    return await this.prisma.transaction.findMany(findManyDto);
  }

  async findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return await this.prisma.transaction.findFirst(findFirstDto);
  }

  async update(updateDto: Prisma.TransactionUpdateArgs) {
    return await this.prisma.transaction.update(updateDto);
  }

  async delete(deleteDto: Prisma.TransactionDeleteArgs) {
    return await this.prisma.transaction.delete(deleteDto);
  }
}
