import { Module } from '@nestjs/common';
import { PrismaService } from './shared/database/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
