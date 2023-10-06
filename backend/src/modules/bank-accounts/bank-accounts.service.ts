import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class BankAccountsService {
  constructor(private readonly banckAccountsRepo: BankAccountsRepository) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    return this.banckAccountsRepo.create({
      data: {
        ...createBankAccountDto,
        userId,
      },
    });
  }

  findAllByUderId(userId: string) {
    return this.banckAccountsRepo.findMany({
      where: {
        userId,
      },
    });
  }

  update(
    bankAccountId: string,
    userId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return {
      userId,
      bankAccountId,
      updateBankAccountDto,
    };
  }

  remove(id: string) {
    return `This action removes a #${id} bankAccount`;
  }
}
