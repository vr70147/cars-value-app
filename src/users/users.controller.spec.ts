import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUsersService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeUsersService = {
      findUser: (id: number) => {
        return Promise.resolve({
          id,
          email: 'asdf@asdf.com',
          password: 'mypassword',
        } as User);
      },
      findAllUsers: (email: string) => {
        return Promise.resolve([
          { id: 1, email, password: 'mypassword' } as User,
        ]);
      },
      removeUser: (id: number) => {
        return Promise.resolve({
          id,
          email: 'asdf@asdf.com',
          password: 'mypassword',
        } as User);
      },
      // updateUser: () => {},
    };
    fakeAuthService = {
      // signup: () => {},
      signin: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as User);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('findUser throws an error if user with given id is not found', async () => {
    fakeUsersService.findUser = () => null;
    await expect(controller.findUser('1')).rejects.toThrow(NotFoundException);
  });
  it('findAllUsers returns a list of users with the given email', async () => {
    const users = await controller.findAllUsers('asdf@asdf.com');
    await expect(users.length).toEqual(1);
    await expect(users[0].email).toEqual('asdf@asdf.com');
  });

  it('findUser returns a single user with the given id', async () => {
    const user = await controller.findUser('1');
    await expect(user).toBeDefined();
  });

  it('signin updates session object and returns user', async () => {
    const session = { userId: 55 };
    const user = await controller.signin(
      { email: 'asdf@asdf.com', password: 'mypassword' },
      session,
    );
    expect(user.id).toEqual(1);
    expect(session.userId).toEqual(1);
    console.log(session.userId);
  });
});
