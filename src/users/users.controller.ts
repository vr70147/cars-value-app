import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  findUser(id: number) {
    this.userService.findUser(id);
  }

  @Get()
  findAllUsers(email: string) {
    this.userService.findAllUsers(email);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete('/:id')
  removeUser(id: number) {}
}
