import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = {
    id: number;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'akyl',
      password: 'password',
    },
    {
      id: 2,
      username: 'aibek',
      password: 'password',
    },
    {
      id: 3,
      username: 'alikhan',
      password: 'password',
    },
    {
      id: 4,
      username: 'ishen',
      password: 'password',
    },  
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(username: string, password: string): Promise<User> {
    const user = {
      id: this.users.length + 1,
      username,
      password,
    };

    this.users.push(user);
    return user;
  }
}