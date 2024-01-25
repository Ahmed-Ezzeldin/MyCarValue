import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import e from 'express';
import { UsersService } from './users.service';

it('can create an instance of the auth service', async () => {
  // Create a fake copy of the auth service
  const fakeUsersService = {
    find: () => Promise.resolve([]),
    create: (email: string, password: string) =>
      Promise.resolve({
        id: 1,
        email,
        password,
      }),
  };

  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UsersService,
        useValue: fakeUsersService,
      },
    ],
  }).compile();

  const service = module.get(AuthService);
  expect(service).toBeDefined();
});
