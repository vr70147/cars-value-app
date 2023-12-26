import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  findUser(id: number) {
    return this.repo.findOneBy({ id });
  }

  findAllUsers(email: string) {
    return this.repo.find({ where: { email } });
  }

  async updateUser(id: number, attr: Partial<User>) {
    const user = await this.findUser(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attr);
    return this.repo.save(user);
  }

  async removeUser(id: number) {
    const user = await this.findUser(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
