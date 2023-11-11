import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository) {}

  async getUserById(userId: string) {
    const user: any = this.usersRepo.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
