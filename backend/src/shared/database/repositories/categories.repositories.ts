import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(findMany: Prisma.CategoryFindManyArgs) {
    return await this.prisma.category.findMany(findMany);
  }
}
