import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: Prisma.BankAccountCreateArgs) {
    return await this.prisma.bankAccount.create(createDto);
  }

  async findMany<T extends Prisma.BankAccountFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>,
  ) {
    return await this.prisma.bankAccount.findMany(findManyDto);
  }

  async findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs) {
    return await this.prisma.bankAccount.findFirst(findFirstDto);
  }

  async update(updateDto: Prisma.BankAccountUpdateArgs) {
    return await this.prisma.bankAccount.update(updateDto);
  }

  async delete(deleteDto: Prisma.BankAccountDeleteArgs) {
    return await this.prisma.bankAccount.delete(deleteDto);
  }
}
