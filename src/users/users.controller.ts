import { Controller, Delete, Get, Patch, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }

  @Get()
  findUser(id: number) {}

  @Get()
  findAllUsers() {}

  @Patch()
  updateUser(id: number) {}

  @Delete()
  removeUser(id: number) {}
}
