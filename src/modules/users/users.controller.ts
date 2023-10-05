import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  me(@Req() request: Request) {
    console.log('meUserId : ' + request['userId']);
    // return this.usersService.getUserById('userId');
  }
}
