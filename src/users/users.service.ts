import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

// This should be a real class/interface representing a user entity
export class UserDto {
  userId: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: Array<UserDto> = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<UserDto | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
