import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: Prisma.BankAccountCreateArgs) {
    return await this.prisma.bankAccount.create(createDto);
  }

  async findMany(findManyDto: Prisma.BankAccountFindManyArgs) {
    return await this.prisma.bankAccount.findMany(findManyDto);
  }

  async findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs) {
    return await this.prisma.bankAccount.findFirst(findFirstDto);
  }
}
