import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ValidationError } from 'sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  getUser(id: string): string {
    return 'USER:' + id;
  }

  async createUser(userData): Promise<string> {
    try {
      const user = new User(userData);
      const createdUser = await user.save();
      return JSON.stringify(createdUser || {});
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ConflictException('Sequelize validation error', {
          cause: err,
          description: err.errors[0].message,
        });
      }
    }
  }
}
