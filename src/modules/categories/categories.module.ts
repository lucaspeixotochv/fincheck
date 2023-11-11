import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './categories.controller';
import { ValidateCategtoriesOwnershipService } from './services/validate-categories-ownership.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ValidateCategtoriesOwnershipService],
  exports: [ValidateCategtoriesOwnershipService],
})
export class CategoriesModule {}
