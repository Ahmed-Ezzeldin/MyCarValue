import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  signup(email: string, password: string) {
    // See if email already exists
    const users = this.usersService.find(email);
    if (users) {
      throw new BadRequestException('Email already exists');
    }
    // Hash the users passsword
    // Create a new user and save it
    // Return the new user
  }

  signin() {}
}
