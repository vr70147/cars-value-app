import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser() {}

  @Get()
  findUser(id: number) {}

  @Get()
  findAllUsers() {}

  @Patch()
  updateUser(id: number) {}

  @Delete()
  removeUser(id: number) {}
}
