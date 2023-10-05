import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  async getUserById(userId: string) {
    return userId;
  }
}
