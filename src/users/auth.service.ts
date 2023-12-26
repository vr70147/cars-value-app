import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    const user = await this.userService.findAllUsers(email);
    if (user.length) {
      throw new BadRequestException('email in use');
    }
  }

  signin() {}
}
