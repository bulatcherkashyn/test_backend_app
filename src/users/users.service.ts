import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ValidationError } from 'sequelize';
import * as bcrypt from 'bcrypt';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({
      raw: true,
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('Not found such user');
    }
    return user;
  }

  async findUserByID(userID: string): Promise<User> {
    const user = await this.userModel.findOne({
      raw: true,
      attributes: {
        exclude: ['password'],
      },
      where: {
        id: userID,
      },
    });

    if (!user) {
      throw new NotFoundException('Not found such user');
    }

    return user;
  }

  async createUser(userData): Promise<string> {
    const salt = 10;
    try {
      const { password, ...payload } = userData;
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({ ...payload, password: hashedPassword });
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
