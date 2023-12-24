import { Controller, Delete, Get, Patch, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
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
